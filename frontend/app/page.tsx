"use client";
import React, { useState } from "react";
import axiosApi from "../axiosApi";
import { Grid, Icon, IconButton, TextField, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { postProps, stateProps } from "../types";
import { useMutation } from "@tanstack/react-query";

export default function Home() {
  const [state, setState] = useState<stateProps>({
    encoded: "",
    decoded: "",
    password: "",
  });

  const encodeMutation = useMutation({
    mutationFn: async (messageData: postProps) => {
      const response = await axiosApi.post("/vigenere/encode", messageData);
      return response.data;
    },
    onSuccess: (data) => {
      setState((prevState) => ({
        ...prevState,
        decoded: '',
        encoded: data.encoded,
      }));
    },
  });

  const decodeMutation = useMutation({
    mutationFn: async (messageData: postProps) => {
      const response = await axiosApi.post("/vigenere/decode", messageData);
      return response.data;
    },
    onSuccess: (data) => {
      setState((prevState) => ({
        ...prevState,
        encoded: '',
        decoded: data.decoded,
      }));
    },
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onDecode = async () => {
    const messageObj = {
      message: state.encoded,
      password: state.password,
    };
    await decodeMutation.mutateAsync(messageObj);
  };

  const onEncode = async () => {
    const messageObj = {
      message: state.decoded,
      password: state.password,
    };
    await encodeMutation.mutateAsync(messageObj);
  };

  return (
    <form onSubmit={onSubmit}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Cipher</Typography>
          </Grid>
          <Grid item width={500}>
            <TextField
              multiline
              rows={3}
              id="decoded"
              label="Decoded message"
              name="decoded"
              value={state.decoded}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item container width={500} justifyContent="center" alignItems="center">
            <Grid item flexGrow={1}>
              <Grid item xs>
                <TextField
                  required
                  id="password"
                  label="Password"
                  name="password"
                  value={state.password}
                  onChange={inputChangeHandler}
                />
              </Grid>
            </Grid>
            <Grid item>
              <IconButton type="submit" onClick={onDecode}>
                <ArrowUpwardIcon />
              </IconButton>
              <IconButton type="submit" onClick={onEncode}>
                <ArrowDownwardIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item width={500}>
            <TextField
              multiline
              rows={3}
              id="encoded"
              label="Encoded message"
              name="encoded"
              value={state.encoded}
              onChange={inputChangeHandler}
            />
          </Grid>
        </Grid>
    </form>
  );
}
