import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import dotenv from "dotenv";
import { Auction } from "./models/Auction";
import { Bid } from "./models/Bid";

dotenv.config();

const app = express();

const messages: Bid[] = [];

export const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      `${process.env.AUCTIONS_APP_URL}`,
      `${process.env.AUCTIONEER_APP_URL}`,
    ],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.emit("previousMessages", messages);

  socket.on("sendNewMessage", (messageObj: Bid) => {
    console.log(messageObj);
    messages.push(messageObj);
    socket.broadcast.emit("messageReceived", messageObj);
  });

  socket.on("auctionStarted", (messageObj: Auction) => {
    console.log(messageObj);
    socket.broadcast.emit("newAuction", messageObj);

    /**
     * O bloco a seguir serve apenas para testar
     * a tela de acompanhamento do leilão ao vivo.
     * Remover depois.
     */

    const names = ["Fulano", "Beltrano", "Cicrano"];
    let bidValue = 510;
    setInterval(() => {
      const bid: Bid = {
        auctionId: messageObj.id,
        username: names[Math.floor(Math.random() * names.length)],
        value: bidValue,
      };

      bidValue += 50;

      socket.broadcast.emit("messageReceived", bid);
      console.log("Bid sent");
    }, 5000);
    /* Fim do bloco */
  });
});
