import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";

const Cards = (props) => {
  const { url, title, price, oldPrice, percentage, dayLeft } = props.item;

  const Showdata = (e) => {
    props.setData({
      ...props.data,
      e,
    });
    props.setClicked(true);
  };
  return (
    <Card
      key={props.index}
      sx={{ maxWidth: 210, margin: 0.5 }}
      onClick={() => {
        Showdata(props.item);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Stack>
            <Typography variant="body1" color="text.secondary">
              AED {price} {percentage}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Old AED {oldPrice}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {dayLeft}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Cards;
