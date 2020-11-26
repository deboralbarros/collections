import { useState, useEffect } from "react";
import { CardMedia, IconButton } from "@material-ui/core";
import { MdFavorite } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <div>
              {item.name}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </div>
            <CardMedia component="img" image={item.image} />
          </Card>
        </motion.div>
      ))}
    </Container>
  );
};

export default CardsList;
