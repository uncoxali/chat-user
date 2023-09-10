import { Box } from "@mui/material";
import React from "react";

type Props = {
  length: number;
};
export function Badge({ length }: Props) {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#5100ce",
        textAlign: "center",
        color: "white",
        fontSize: "14px",
      }}
    >
      {length}
    </Box>
  );
}
