import { Box } from "@mui/material";
import React, { Children, ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function MainNoSSR({ children }: Props) {
  return <Box sx={{ minWidth: "375px", px: "20px" }}>{children}</Box>;
}
