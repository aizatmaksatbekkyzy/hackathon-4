import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAnimals } from "../../../contexts/AnimalContextProvider";
import { useNavigate } from "react-router-dom";
import "../../../style/cardAnimal.css";
export default function CardAnimal({ item }) {
  const { deleteAnimal } = useAnimals();
  console.log(item);
  const navigate = useNavigate();
  return (
    <Card className="container">
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Breed:
            {item.breed}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Name:
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age:
            {item.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
          <Button size="small" onClick={() => deleteAnimal(item.id)}>
            Delete
          </Button>
          <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </Card>
  );
}
