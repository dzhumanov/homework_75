"use client";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import AppToolbar from "../components/UI/AppToolbar/AppToolbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <html lang="en">
            <head>
              <style>
                {`
                    html, body {
                        height: 100%;
                    }
                    body {
                        background-image: url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png');
                        background-repeat: no-repeat;
                        background-position: left 20% center;
                        background-size: 25%;
                    }
                `}
              </style>
            </head>
            <body>
              <header>
                <AppToolbar />
              </header>
              <main>
                <Container maxWidth="xl">{children}</Container>
              </main>
            </body>
          </html>
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
