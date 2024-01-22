"use client";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import NextLink from "next/link";
import React from "react";

const Link = styled(NextLink)({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: "inherit",
  },
});

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">Code your message with Cypher</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
