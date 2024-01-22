"use client";
import React from "react";
import axiosApi from "../axiosApi";
import {
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Products</Typography>
        </Grid>
        <Grid item>
          <TextField
            required
            multiline
            rows={3}
            id="description"
            label="Description"
            name="description"
          />
        </Grid>
        <Grid item>
          <TextField
            required
            multiline
            rows={3}
            id="description"
            label="Description"
            name="description"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
