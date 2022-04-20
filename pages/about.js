import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function calculateAge(birthday) {
	// birthday is a date
	var ageDifMs = Date.now() - birthday;
	var ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function AboutPage() {
	return (
		<>
			<Toolbar />
			<Container sx={{ mt: 8, mb: 9 }}>
				<Typography variant="h1" AccentColor sx={{ mt: 19 }}>
					About me
				</Typography>
				<Typography variant="h5" AccentColor>
					Hi! My name is Manu, and I'm a {calculateAge(new Date("3/19/2008"))}
					-year-old MERN/full-stack developer.
					<br />
					<br />
					<br />
					<u>What inspired you to code?</u>
					<br />
					My mom first introduced me to Scratch in 4th grade, and I've been
					interested in programming ever since!
					<br />
					<br />
					<u>Why do you code?</u>
					<br />
					I'm passionate about making helpful apps for others so that the world
					can benefit from it
					<br />
					<br />
					<u>What's your favorite programming editor?</u>
					<br />
					Visual Studio Code
					<br />
					<br />
					<u>What's "Smartlist"?</u>
					<br />
					Smartlist's a nonprofit startup company I and my high-school friends
					started to provide utilities to make the world a better place.
					<br />
					<br />
					<u>What's your favorite color?</u>
					<br />
					Black
					<br />
					<br />
					<u>What other hobbies do you enjoy?</u>
					<br />I enjoy biking outdoors, flying my drone in a nearby park, and
					hanging out with my friends!
				</Typography>
			</Container>
		</>
	);
}
