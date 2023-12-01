// components/Layout.tsx
import React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import AppBarMenu from "@/components/AppBarMenu/AppBarMenu";
import Footer from "@/components/Footer/Footer";
import { Box, Grid } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard for all",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
            <AppBarMenu />
            <Grid container>
              <Grid item xs={12} sm={3}>
                <Sidebar />
              </Grid>
              <Grid item xs={12} sm={9}>
                {children}
              </Grid>
            </Grid>
            <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
