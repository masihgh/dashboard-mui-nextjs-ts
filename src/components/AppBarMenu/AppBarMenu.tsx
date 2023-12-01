'use client'

import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type Props = {};

export default function AppBarMenu({}: Props) {
  return (
    <AppBar position="static" sx={{ zIndex: 2000 }}>
      <Toolbar
        sx={{ boxShadow:1,backgroundColor: "background.primary", color: "primary.contrastText" }}
      >
        <Typography variant="h6" color="primary.contrastText">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
