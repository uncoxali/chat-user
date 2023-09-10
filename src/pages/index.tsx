import * as React from "react";
import Box from "@mui/material/Box";

import Header from "@/components/header";
import { Divider, Typography } from "@mui/material";

import dynamic from "next/dynamic";

const TableGroup = dynamic(() => import("./tabs"), { ssr: false });

export default function LabTabs() {
  return (
    <Box>
      <Header />
      <Divider sx={{ background: "#2d2f57", height: "2px" }} />
      <TableGroup />
    </Box>
  );
}
