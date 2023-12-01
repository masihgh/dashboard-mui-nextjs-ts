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
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <ThemeRegistry>
          <Box sx={{ flexGrow: 1 }}>
            <AppBarMenu />
            <Grid container sx={{ flexGrow: 1 }}>
              <Grid item xs={12} sm={3}>
                <Sidebar />
              </Grid>
              <Grid item xs={12} sm={9} sx={{ overflowY: "auto", padding: "20px" }}>
                {children}
              </Grid>
            </Grid>
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
