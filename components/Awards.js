import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AccentColor } from "../pages/index";

export function Awards() {
  return (
    <Box sx={{ background: AccentColor, color: "white", p: 7 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Awards &amp; events I've participated in
      </Typography>
      <Typography variant="h5" sx={{ mb: 1 }}>
        <span style={{ opacity: 1 }}>HackOR 2022</span>
        <span style={{ opacity: 0.7 }}> 1st place</span>
      </Typography>
      <Typography variant="h5" sx={{ mb: 1 }}>
        <span style={{ opacity: 1 }}>CyberPatriot 2021</span>
        <span style={{ opacity: 0.7 }}> Participant</span>
      </Typography>
      <Typography variant="h5" sx={{ mb: 1 }}>
        <span style={{ opacity: 1 }}>CyberPatriot 2022</span>
        <span style={{ opacity: 0.7 }}> Semifinal Qualifier</span>
      </Typography>
      <Typography variant="h5" sx={{ mb: 1 }}>
        <span style={{ opacity: 1 }}>CyberCup 2022</span>
        <span style={{ opacity: 0.7 }}> Final round qualifier</span>
      </Typography>
    </Box>
  );
}
