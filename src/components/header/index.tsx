import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";
import React, { CSSProperties } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const style: CSSProperties = {
  height: "70px",
  background: "#1f2247",
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  left: 0,
  alignItems: "center",
  padding: 2,
  color: "white",
};

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <MenuIcon />
          </Box>
          <Box>پیام های سازمانی</Box>
          <Box>
            <SearchIcon />
          </Box>
        </Box>
      </Box>
    </header>
  );
}
