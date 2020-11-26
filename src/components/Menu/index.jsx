import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu } from "antd";

const HeaderMenu = ({ isUser, setAuthentication }) => {
  const [selected, setSelected] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setSelected(["graphic"]);
    } else {
      const key = pathname.replace("/", "");

      setSelected([key]);
    }
  }, [pathname]);

  const { Item } = Menu;

  return (
    <Menu selectedKeys={selected} mode="horizontal" theme_color="primary">
      <Item key="graphic">
        <Link to="/">Gráfico</Link>
      </Item>

      <Item key="rickandmorty">
        <Link to="/rickandmorty">Rick and Morty</Link>
      </Item>

      <Item key="pokemon">
        <Link to="/pokemon">Pokemon</Link>
      </Item>
    </Menu>
  );
};

export default HeaderMenu;
