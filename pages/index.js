import Link from "next/link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ProjectList } from "../components/ProjectList";
import { WhatDoIDo } from "../components/WhatDoIDo";
import { Awards } from "../components/Awards";
import { Specializations } from "../components/Specializations";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grow from "@mui/material/Grow";

import Fab from "@mui/material/Fab";

export const AccentColor = "#dc2626";

export default function IndexPage() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          width: "100vw",
          justifyContent: "center",
          color: "white",
          background: "url(https://i.ibb.co/2gYpC2Z/image.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Box sx={{ px: 3 }}>
          <Toolbar />
          <Typography className="font-mono">
            Hey there! My name is Manu...{" "}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "60px", sm: "100px" }
            }}
          >
            and I develop apps, websites &amp; discord bots
          </Typography>
        </Box>
        <Fab
          onClick={() => window.scrollTo(0, 500)}
          sx={{
            background: "#000!important",
            color: "#fff",
            position: "absolute",
            boxShadow: 0,
            bottom: 15,
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <Grow in={true}>
            <ExpandMoreIcon />
          </Grow>
        </Fab>
      </Box>

      <WhatDoIDo />
      <Specializations />
      <ProjectList />
      <Awards />
    </div>
  );
}
