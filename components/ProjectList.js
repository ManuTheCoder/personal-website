import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { AccentColor } from "../pages/index";
import Masonry from "@mui/lab/Masonry";

const projectList = [
	{
		title: "Smartlist",
		description: "Smart and easy home inventory management",
		comingSoon: false,
		deprecated: false,
		url: "https://smartlist.tech",
		categories: [
			"#home-inventory",
			"#fintech",
			"#shopping-lists",
			"#budgeting",
			"#reactjs"
		]
	},
	{
		title: "Visionly",
		description: "Create roadmaps of your project with ease",
		comingSoon: true,
		deprecated: false,
		url: "https://visionly.manuthecoder.ml",
		categories: [
			"#planning",
			"#roadmaps",
			"#node-js",
			"#mongodb",
			"#productivity"
		]
	},
	{
		title: "EdPoll",
		description:
			"EdPoll is a real-time polling app for education. Create wordclouds, bulletin boards, and polls for freee. No signup required.",
		comingSoon: false,
		deprecated: false,
		url: "https://edpoll.ga",
		categories: ["#realtime", "#polling", "#educational", "#productivity"]
	},
	{
		title: "SchoolNerd",
		description: "Hassle-free learning management system (LMS) for free",
		label: "This project is no longer supported",
		comingSoon: false,
		deprecated: true,
		url: "https://edpoll.ga",
		categories: ["#lms", "#hackor2021winner", "#educational", "#productivity"]
	},
	{
		title: "Smartlist collaborate",
		description: "Plan your events in real-time with collaborators",
		comingSoon: true,
		deprecated: false,
		url: "https://collaborate.smartlist.tech",
		categories: ["#event-planning", "#mongodb", "#node-js", "#productivity"]
	},
	{
		title: "Smartlist availability",
		description:
			"Smartlist Availability is the easiest way to find the best time to get your group together",
		comingSoon: true,
		deprecated: false,
		url: "https://collaborate.smartlist.tech",
		categories: ["#event-planning", "#mongodb", "#node-js", "#productivity"]
	},
	{
		title: "Alphite",
		description:
			"Alphite's a discord mini-game where you can create and manage your own empire!",
		comingSoon: false,
		deprecated: false,
		url: "https://alphite.manuthecoder.ml",
		categories: ["#discordjs", "#discord", "#discord-bot", "#fun"]
	},
	{
		title: "Ultimate Survival",
		description:
			"Ultimate Survival changes minecraft survival to be harder and more fun. It changes recipes, adds advancements, better and improved recipes, and more to come",
		comingSoon: false,
		deprecated: false,
		url: "https://ultimatesurvival.vercel.app",
		categories: ["#minecraft", "#mod", "#fun"]
	}
];

export function ProjectList() {
	return (
		<Box sx={{ background: "#000", color: "#fff", p: 7 }}>
			<Typography variant="h3" sx={{ mb: 5 }}>
				Some things I've been working on
			</Typography>
			<Box sx={{ mr: -3 }}>
				<Masonry columns={{ xs: 1, sm: 2 }} spacing={3}>
					{projectList.map((project) => (
						<Box
							sx={{
								background: "rgba(255,255,255,.1)",
								borderRadius: 4,
								px: 4,
								py: 3
							}}
						>
							<Typography variant="h4" sx={{ mb: 1 }}>
								{project.title}
							</Typography>
							<Typography variant="h5" sx={{ opacity: 0.7 }}>
								{project.description}
							</Typography>
							<Box sx={{ mt: 2 }}>
								{project.categories.map((category) => (
									<Chip
										label={category}
										sx={{ color: "#eee", background: "#303030", mr: 1, mb: 1 }}
									/>
								))}
							</Box>
							<Button
								variant="outlined"
								href={project.url}
								target="_blank"
								sx={{
									mt: 1,
									...((project.comingSoon || project.deprecated) && {
										pointerEvents: "none",
										cursor: "disabled",
										opacity: 0.7
									}),
									textTransform: "none",
									background: "transparent",
									color: "#fff",
									borderRadius: 1,
									px: 3,
									fontSize: "14px",
									py: 1,
									borderWidth: 2,
									borderColor: "#fff",
									transition: "none",
									"&:hover": {
										borderWidth: 2,
										borderColor: "#fff",
										background: "rgba(255,255,255,.3)",
										color: "#fff"
									},
									"&:active": {
										background: "rgba(255,255,255,.5)"
									}
								}}
								disableElevation
							>
								{project.comingSoon
									? "Coming soon!"
									: project.deprecated
									? "No longer supported"
									: "Visit site"}
							</Button>
						</Box>
					))}
				</Masonry>
			</Box>
		</Box>
	);
}
