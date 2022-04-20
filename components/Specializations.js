import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AccentColor } from "../pages/index";

export function Specializations() {
	return (
		<Box sx={{ background: "#fff", color: AccentColor, p: 7 }}>
			<Typography variant="h3">My specializations</Typography>
			<Typography variant="h5" sx={{ mt: 1 }}>
				<span style={{ opacity: 0.7 }}>I'm fully experienced with </span>
				<span style={{ opacity: 1 }}>MongoDB, ExpressJS, ReactJS, NodeJS </span>
				<span style={{ opacity: 0.7 }}>as well as </span>
				<span style={{ opacity: 1 }}>
					HTML, CSS, JavaScript/TypeScript, PHP, and SQL.
				</span>
				<span style={{ opacity: 0.7 }}> I've also worked with </span>
				<span style={{ opacity: 1 }}>TailwindCSS, MUI, and MaterializeCSS</span>
			</Typography>
		</Box>
	);
}
