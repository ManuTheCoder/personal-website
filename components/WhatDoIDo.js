import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AccentColor } from "../pages/index";

export function WhatDoIDo() {
	return (
		<Box
			sx={{
				background: AccentColor,
				color: "white",
				p: 7
			}}
		>
			<Typography variant="h3">What do I do?</Typography>
			<Typography variant="h5" sx={{ mt: 1 }}>
				<span style={{ opacity: 0.7 }}>I code </span>
				<span style={{ opacity: 1 }}>
					quality apps, websites &amp; products{" "}
				</span>
				<span style={{ opacity: 0.7 }}>that help people</span>
			</Typography>
			<Typography variant="h5" sx={{ mt: 1 }}>
				<span style={{ opacity: 0.7 }}>All my projects are </span>
				<span style={{ opacity: 1 }}>free &amp; open source</span>
			</Typography>
			<Button
				variant="outlined"
				sx={{
					mt: 2,
					textTransform: "none",
					borderWidth: 2,
					background: "transparent",
					color: "#fff",
					borderRadius: 1,
					px: 2.5,
					fontSize: "15px",
					py: 1.5,
					borderColor: "#fff",
					transition: "none",
					"&:hover": {
						borderWidth: 2,
						borderColor: "#fff",
						background: "#fff",
						color: AccentColor
					}
				}}
				disableElevation
				size="large"
			>
				Available for hire
			</Button>
		</Box>
	);
}
