import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAnimals } from "../../../contexts/AnimalContextProvider";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContextProvider";
import "../../../style/cardAnimal.css";
import Stack from "@mui/material/Stack";
import LikeAnimal from "../LikeAnimal/LikeAnimal";
const CardAnimal = ({ item }) => {
  const navigate = useNavigate();
  const { deleteAnimal } = useAnimals();
  const { addAnimalToCart, checkAnimalInCart } = useCart();

  return (
    <div>
      <div>
        <Card
          sx={{ maxWidth: 500 }}
          style={{
            width: "280px",
          }}>
          <CardMedia
            component="img"
            height="160"
            image={item.img}
            alt="green iguana"
          />
          <CardContent
            style={{ backgroundColor: "white", color: "rgb(74, 75, 75)" }}>
            <Typography gutterBottom variant="h5" component="div">
              Breed:
              {item.breed}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Name:
              {item.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" color="">
              Age:
              {item.age}
            </Typography>
            <Typography variant="body2" color="">
              {" "}
              Description:
              {item.desc}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Price:
              {item.price} $
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="big"
              onClick={() => deleteAnimal(item.id)}
              style={{ color: "blue", padingLeft: "35px" }}>
              Delete
            </Button>
            <Button
              size="big"
              onClick={() => navigate(`/edit/${item.id}`)}
              style={{ color: "blue" }}>
              Edit
            </Button>
            <Button>
              <LikeAnimal />
            </Button>
          </CardActions>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              style={{
                width: "100%",
              }}
              onClick={() => addAnimalToCart(item)}>
              kaufen
            </Button>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default CardAnimal;
