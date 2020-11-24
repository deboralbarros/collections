import { CardMedia, CardActions, IconButton } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

import { List, CardCustom as Card } from "./style";

const CardsList = ({ list, handleFavorite, removeFavorite }) => {
  const favorites = window.localStorage.getItem("favoriteChars");

  const handleAddOrRemoveFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
      return;
    }

    handleFavorite(id);
  };

  return (
    <List>
      {list.map((char) => (
        <Card key={char.id}>
          <p>{char.name}</p>
          <CardMedia component="img" image={char.image} />
          <CardActions disableSpacing>
            <IconButton onClick={() => handleAddOrRemoveFavorite(char.id)}>
              <Favorite
                style={{
                  color: favorites.includes(char.id) ? "red" : "gray",
                }}
              />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </List>
  );
};

export default CardsList;
