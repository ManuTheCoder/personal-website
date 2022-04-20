import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";
import Card from "@mui/material/Container";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Posts() {
	const { data, error } = useSWR(
		"https://dev.to/api/articles?username=manuthecoder&per_page=100",
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	// render data
	return (
		<Masonry columns={{ xs: 1, sm: 3 }} sx={{ mt: 4 }}>
			{data.map((post) => (
				<Paper
					key={post.id}
					elevation={0}
					sx={{ background: "transparent", color: "white", p: 0 }}
				>
					<Card sx={{ p: 0, m: 0, width: "100%", mb: 5 }}>
						<CardActionArea
							href={post.url}
							sx={{
								background: "rgba(255,255,255,.2)",
								borderRadius: 3,
								p: 2,
								m: 0,
								width: "100%!important"
							}}
						>
							<Typography variant="h5" sx={{ mb: 1 }}>
								{post.title}
							</Typography>
							<Typography>{post.description}</Typography>
						</CardActionArea>
					</Card>
				</Paper>
			))}
		</Masonry>
	);
}

export default function AboutPage() {
	return (
		<>
			<Toolbar />
			<Container sx={{ mt: 8, mb: 9 }}>
				<Typography variant="h1" AccentColor sx={{ mt: 19 }}>
					Recent posts
				</Typography>
				<Typography variant="h5" AccentColor>
					on DEV community
				</Typography>
				<Posts />
			</Container>
		</>
	);
}
