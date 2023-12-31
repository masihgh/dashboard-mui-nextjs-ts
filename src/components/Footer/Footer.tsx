"use client";

import * as React from "react";
import { Card, CardContent } from "@mui/material";

type Props = {};

export default function Footer({}: Props) {
  const [value, setValue] = React.useState(0);

  return (
    <Card variant="elevation" sx={{textAlign:'center',boxShadow:1,zIndex:10000}}>
      <CardContent>
        <strong>Copy Right</strong>
      </CardContent>
    </Card>
  );
}
