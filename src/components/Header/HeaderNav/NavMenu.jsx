import { Fade, Link } from "@mui/material";
import React from "react";
import uniqid from "uniqid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const NavMenu = (props) => {
  const [toggleLink, setToggleLink] = React.useState(null);
  const open = Boolean(toggleLink);

  const handleClick = (event) => {
    setToggleLink(event.currentTarget);
  };

  const handleClose = () => {
    setTimeout(()=>{
    setToggleLink(null);
    },100)
  };

  return (
    <React.Fragment>
      <Link
        className={`nav_link nav_link_with_sybol ${open && 'link_active'}`}
        href={props.item.href}
        underline="none"
        onClick={handleClick}
      >
        {props.item.name}
      </Link>
      <Menu
        className="menu"
        anchorEl={toggleLink}
        id="fade-menu"
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        MenuListProps={{
            'aria-labelledby': 'fade-button'
        }}
        PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              color: '#fff',
              bgcolor: '#172d3e',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '& .MuiMenuItem-root':{
                '&:hover': {
                    color: '#01a781',
                }
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: '50%',
                width: 10,
                height: 10,
                bgcolor: '#172d3e',
                //bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        {props.item.contentLink.map((content) => {
          return (
            <MenuItem className="menu_item" key={uniqid("contentLink-")} onClick={handleClose}>
              {content.name}
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};
