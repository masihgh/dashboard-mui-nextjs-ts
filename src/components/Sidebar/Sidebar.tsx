'use client'

import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

type MenuItem = {
  icon: JSX.Element;
  primaryText: string;
  onClick?: () => void;
  subItems?: MenuItem[];
};

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems: MenuItem[] = [
    {
      icon: <SendIcon />,
      primaryText: 'Sent mail',
    },
    {
      icon: <DraftsIcon />,
      primaryText: 'Drafts',
    },
    {
      icon: <InboxIcon />,
      primaryText: 'Inbox',
      onClick: handleClick,
      subItems: [
        {
          icon: <StarBorder />,
          primaryText: 'Starred',
        },
        // Add more sub-items if needed
      ],
    },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <ListItemButton key={item.primaryText} onClick={item.onClick}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.primaryText} />
      {item.subItems && (open ? <ExpandLess /> : <ExpandMore />)}
    </ListItemButton>
  );

  const renderSubMenu = (subItems: MenuItem[] = []) => (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {subItems.map((subItem) => (
          <ListItemButton key={subItem.primaryText} sx={{ pl: 4 }}>
            <ListItemIcon>{subItem.icon}</ListItemIcon>
            <ListItemText primary={subItem.primaryText} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {menuItems.map((menuItem) => (
        <React.Fragment key={menuItem.primaryText}>
          {renderMenuItem(menuItem)}
          {menuItem.subItems && renderSubMenu(menuItem.subItems)}
        </React.Fragment>
      ))}
    </List>
  );
};

export default Sidebar;
