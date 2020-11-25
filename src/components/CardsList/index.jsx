import { useState, useEffect } from "react";
import { CardMedia, IconButton } from "@material-ui/core";
import { MdFavorite } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { CardCustom as Card, Container } from "./style";

const CardsList = ({ list, addFavorite, removeFavorite }) => {
  const [category, setCategory] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/pokemon") {
      setCategory("favoritePokemons");
    } else if (pathname === "/rickandmorty") {
      setCategory("favoriteChars");
    }
  }, [pathname]);

  const favorite = window.localStorage.getItem(category);

  return (
    <Container>
      {list.map((item) => (
        <Card key={item.id}>
          <p>
            {item.name}
            <IconButton
              title="Clique para favoritar"
              onClick={() => {
                if (favorite.includes(item.id)) {
                  removeFavorite(item.id);
                } else {
                  addFavorite(item.id);
                }
              }}
            >
              <MdFavorite
                style={{
                  color: favorite.includes(item.id) ? "red" : "gray",
                }}
              />
            </IconButton>
          </p>
          <CardMedia component="img" image={item.image} />
        </Card>
      ))}
    </Container>
  );
};

export default CardsList;
