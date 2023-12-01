'use client'
import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// Dashboard items constant
export const dashboardItems = [
  {
    icon: <SendIcon />,
    text: 'Sent mail',
  },
  {
    icon: <DraftsIcon />,
    text: 'Drafts',
  },
  {
    icon: <InboxIcon />,
    text: 'Inbox',
    nestedItems: [
      {
        icon: <StarBorder />,
        text: 'Starred',
      },
    ],
  },
];

type Props = {
  isMobile: boolean;
};
export default function Sidebar({ isMobile }: Props) {
    const [open, setOpen] = React.useState(!isMobile);
  
    const toggleDrawer = (openStatus: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent
    ) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(openStatus);
    };
  
    const toggleNestedItems = (index: number) => (
      event: React.MouseEvent<HTMLLIElement>
    ) => {
      const updatedItems = [...dashboardItems];
      updatedItems[index].open = !updatedItems[index].open;
      setOpen(!open); // Update state to trigger re-render
    };
  
    return (
      <>
        {isMobile ? (
          <>
            {/* Mobile view implementation... */}
          </>
        ) : (
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            {dashboardItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  onClick={
                    item.nestedItems ? toggleNestedItems(index) : toggleDrawer(false)
                  }
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  {item.nestedItems && (item.open ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {item.nestedItems && item.open && (
                  <List component="div" disablePadding>
                    {item.nestedItems.map((nestedItem, nestedIndex) => (
                      <ListItemButton key={nestedIndex} sx={{ pl: 4 }}>
                        <ListItemIcon>{nestedItem.icon}</ListItemIcon>
                        <ListItemText primary={nestedItem.text} />
                      </ListItemButton>
                    ))}
                  </List>
                )}
              </React.Fragment>
            ))}
          </List>
        )}
      </>
    );
  }
  