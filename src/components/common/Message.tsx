import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {
  SG: boolean;
  text: string;
  date: Date
};

export default function Message({ SG, date, text }: Props) {
  const newDate = date ? new Date(date) : new Date();

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        m={2}
        sx={{
          background: SG ? "white" : "#01041f",
          borderRadius: "5px",
          p: 1.5,
          color: SG ? "#01041f" : "#fcffff",
          width: "300px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", left: 2, top: 1 }}>
            <MoreVertIcon />
          </Box>
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
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
                    <Typography mr={1}>{name}</Typography>
                  </Box> */}

          <Typography>{text}</Typography>
        </Box>
        <Typography color="white" fontSize={10} mt={2}>
          {newDate.getHours()}:{newDate.getMinutes()}
        </Typography>
      </Box>
    </Box>
  );
}
