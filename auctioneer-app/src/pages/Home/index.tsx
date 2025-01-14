import { useContext, useState } from "react";

import styles from "./styles.module.css";
import { Auction } from "../../models/Auction";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { SocketContext } from "../../context/SocketContext";
import { ImageService } from "../../services/ImageService";

const Home = () => {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [initialBid, setInitialBid] = useState(1);
  const [submitting, isSubmitting] = useState(false);

  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  const startAuction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSubmitting(true);

    if (socket) {
      const uuid = crypto.randomUUID();

      try {
        const uploadedImage = await ImageService.uploadThumbnail(
          image as File,
          uuid
        );

        if (uploadedImage) {
          const imageURL = uploadedImage.url;

          const auction: Auction = {
            id: uuid,
            imageURL,
            title,
            description,
            initialBid,
          };
          console.log(auction);

          navigate("/auction", { state: { auction } });
        }
      } catch (err) {
        console.log(err);
        isSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.auctionArea}>
        <form className={styles.auctionForm} onSubmit={(e) => startAuction(e)}>
          <input
            type="file"
            required
            placeholder="Escolha uma foto do produto"
            accept="image/png,image/jpeg"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
          />

          <input
            required
            type="text"
            value={title}
            placeholder="Título do produto"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            required
            placeholder="Descrição do produto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input
            type="number"
            required
            placeholder="Lance inicial (R$)"
            min="1"
            value={initialBid}
            onChange={(e) => setInitialBid(+e.target.value)}
          />

          <input type="submit" value="Iniciar" />
        </form>
      </div>

      <BeatLoader color="#555" loading={submitting} />
    </div>
  );
};

export default Home;
