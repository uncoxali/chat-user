import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./Badge";

type Props = {
  id: number;
  avatar: string;
  name: string;
  // lengthNotification: number;
  text: string;
};

export default function ChatNavigator({
  id,
  avatar,
  name,
  // lengthNotification,
  text,
}: Props) {
  return (
    <Link
      href={{
        pathname: `/${id}`,
        query: { name, id, avatar },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "left",
          color: "white",
          marginTop: "10px",
        }}
      >
        <Image
          src={`https://reqres.in/img/faces/${id}-image.jpg`}
          width={64}
          height={64}
          style={{
            borderRadius: "50%",
            marginLeft: "10px",
            marginRight: "10px",
          }}
          alt={`name ${name}`}
        />

        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Typography>{name}</Typography>
            <Badge length={4} />
          </Box>
          <Typography>{text}</Typography>
        </Box>
      </Box>
      <Divider sx={{ background: "#2d2f57",marginTop:1.5 }} />

    </Link>
  );
}
