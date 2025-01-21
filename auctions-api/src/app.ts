import express from "express"
import { Server } from "socket.io"
import { createServer } from "http"
import dotenv from "dotenv"
import { Auction } from "./models/Auction"
import { Bid } from "./models/Bid"

dotenv.config()

const app = express()

const auctions: Auction[] = []
const messages: Bid[] = []

export const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: [
      `${process.env.AUCTIONS_APP_URL}`,
      `${process.env.AUCTIONEER_APP_URL}`,
    ],
    methods: ["GET", "POST"],
  },
})

io.on("connection", (socket) => {
  console.log("Client connected")

  socket.emit("previousMessages", messages)

  socket.emit("previousAuctions", auctions)

  socket.on("placeBid", (bid: Bid) => {
    console.log("New bid received:", bid)

    const auction = auctions.find((a) => a.id === bid.auctionId)
    if (auction) {
      auction.bids.push(bid)
      auction.lastBidTime = new Date()

      io.emit("newBid", bid)

      if (new Date().getTime() - auction.lastBidTime.getTime() > 30000) {
        finalizeAuction(auction.id, "finalized")
      }
    }
  })

  socket.on("createAuction", (auction: Auction) => {
    console.log("New auction started:", auction)

    auction.createdAt = new Date()
    auction.lastBidTime = auction.createdAt

    auctions.push(auction)

    io.emit("newAuction", auction)

    setTimeout(() => {
      finalizeAuction(auction.id, "finalized")
    }, auction.deadline * 60000)

    const idleTimeout = setInterval(() => {
      const currentAuction = auctions.find((a) => a.id === auction.id)
      if (
        currentAuction &&
        new Date().getTime() - currentAuction.lastBidTime.getTime() > 30000
      ) {
        finalizeAuction(auction.id, "finalized")
        clearInterval(idleTimeout)
      }
    }, 10000)
  })

  const finalizeAuction = (auctionId: string, status: string) => {
    const auction = auctions.find((a) => a.id === auctionId)
    if (auction) {
      auction.status = status

      if (status === "finalized" && auction.bids.length > 0) {
        const highestBid = auction.bids.reduce((prev, current) =>
          prev.amount > current.amount ? prev : current
        )
        auction.winner = highestBid.user
        io.emit("auctionEnded", {
          auctionId,
          winner: auction.winner,
          bidAmount: highestBid.amount,
        })
      } else if (auction.bids.length === 0) {
        io.emit("auctionEnded", { auctionId, winner: null, bidAmount: null })
      }

      io.emit("auctionStatusUpdate", auction)
    }
  }

  socket.on("sendNewMessage", (messageObj: Bid) => {
    console.log(messageObj)
    messages.push(messageObj)
    socket.broadcast.emit("messageReceived", messageObj)
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })
})

server.listen(process.env.PORT || 4000, () => {
  console.log("Server is running on port 4000")
})
