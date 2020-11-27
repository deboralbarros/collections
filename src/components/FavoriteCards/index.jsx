import { CardMedia } from "@material-ui/core";
import { motion } from "framer-motion";

import { CardCustom as Card, Container } from "../CardsList/style";

const FavoriteCardsList = ({ list }) => {
  return (
    <Container>
      {list.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <div>{item.name}</div>
            <CardMedia component="img" image={item.image} />
          </Card>
        </motion.div>
      ))}
    </Container>
  );
};

export default FavoriteCardsList;
