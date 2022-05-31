import React from "react";
import { Box, Link } from "@mui/material";
import logo from "../../../assetss/bitfinex-logo.svg";
import "./nav.scss";
import { NavLinks } from "../../utils/NavLink";
import { NavMenu } from "./NavMenu";
import uniqid from "uniqid";

const Nav = () => {
  const getLogo = () => {
    return <img className="logo" src={logo} alt="logo" />;
  };

  const getLinks = () => {
    let LinksData = [];

    NavLinks.forEach((item, index) => {
      if (item.contentLink && item.contentLink.length > 0) {
        LinksData.push(<Box key={uniqid("contentLink-")}>
            <NavMenu item={item} index={index}/>
        </Box>);
      } else {
        LinksData.push(
          <Link
            key={uniqid("Link-")}
            className={`nav_link`}
            href={item.href}
            underline="none"
          >
            {item.name}
          </Link>
        );
      }
    });

    return <Box className="links_container">{LinksData}</Box>;
  };

  return (
    <Box className="nav_container">
      {getLogo()}
      {getLinks()}
    </Box>
  );
};

export default Nav;
