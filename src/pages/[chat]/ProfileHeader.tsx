import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import React, { CSSProperties } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import Image from "next/image";

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

export function ProfileHeader() {
  const router = useRouter();
  const { name, id } = router.query;

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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <ArrowForwardIosIcon fontSize="small" />
            </Link>

            <Image
              src={`https://reqres.in/img/faces/${id}-image.jpg`}
              width={50}
              height={50}
              style={{
                borderRadius: "50%",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              alt={`name ${name}`}
            />

            <Typography>{name}</Typography>
          </Box>
        </Box>
        <Box>
          <SearchIcon />
        </Box>
      </Box>
    </header>
  );
}
