import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardMedia, IconButton } from "@material-ui/core";
import { MdFavorite } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { CardCustom as Card, Container } from "./style";

import {
  addToFavoritesCharsThunk,
  removeFromFavoritesCharsThunk,
} from "../../store/modules/favoriteChars/thunks";

import {
  addToFavoritePokemonsThunk,
  removeFromFavoritePokemonsThunk,
} from "../../store/modules/favoritePokemons/thunks";

const CardsList = ({ list, isFavorite }) => {
  const [category, setCategory] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/pokemon") {
      setCategory("favoritePokemons");
    } else if (pathname === "/rickandmorty") {
      setCategory("favoriteChars");
    }
  }, [pathname]);

  const { favoriteChars, favoritePokemons } = useSelector((state) => state);

  const handleClick = (item) => {
    if (category === "favoriteChars") {
      if (favoriteChars.includes(item.id)) {
        dispatch(removeFromFavoritesCharsThunk(item.id));
      } else {
        dispatch(addToFavoritesCharsThunk(item.id));
      }
    } else if (category === "favoritePokemons") {
      if (favoritePokemons.includes(item.id)) {
        dispatch(removeFromFavoritePokemonsThunk(item.id));
      } else {
        dispatch(addToFavoritePokemonsThunk(item.id));
      }
    }
  };

  const dispatch = useDispatch();

  return (
    <Container>
      {list.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <div>
              {item.name}
              {!isFavorite && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconButton
                    title="Clique para favoritar"
                    onClick={() => handleClick(item)}
                  >
                    <MdFavorite
                      style={{
                        color:
                          category === "favoritePokemons"
                            ? favoritePokemons.includes(item.id)
                              ? "red"
                              : "gray"
                            : favoriteChars.includes(item.id)
                            ? "red"
                            : "gray",
                      }}
                    />
                  </IconButton>
                </motion.div>
              )}
            </div>
            <CardMedia component="img" image={item.image} />
          </Card>
        </motion.div>
      ))}
    </Container>
  );
};

export default CardsList;
