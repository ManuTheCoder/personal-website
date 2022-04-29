import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../styles/global.css";
import Head from "next/head";
import Link from "next/link";

function Footer() {
	return (
		<Box sx={{ py: 3, px: 4, background: "#fff" }}>
			<Box
				sx={{
					borderRadius: 10,
					background: "#000",
					color: "#fff",
					padding: 7
				}}
			>
				<Typography variant="h3" sx={{ mb: 1 }}>
					Contact me
				</Typography>
				<Link href="https://github.com/ManuTheCoder">
					<Typography
						variant="h5"
						sx={{
							mb: 0.5,
							opacity: 0.7,
							"&:hover": { opacity: 1, cursor: "pointer" }
						}}
					>
						GitHub
					</Typography>
				</Link>
				<Link href="https://smartlist.tech/discord">
					<Typography
						variant="h5"
						sx={{
							mb: 0.5,
							opacity: 0.7,
							"&:hover": { opacity: 1, cursor: "pointer" }
						}}
					>
						Discord
					</Typography>
				</Link>
				<Link href="https://dev.to/ManuTheCoder">
					<Typography
						variant="h5"
						sx={{
							mb: 0.5,
							opacity: 0.7,
							"&:hover": { opacity: 1, cursor: "pointer" }
						}}
					>
						DEV.to
					</Typography>
				</Link>
				<Link href="https://twitter.com/ManuTheCoder">
					<Typography
						variant="h5"
						sx={{
							mb: 0.5,
							opacity: 0.7,
							"&:hover": { opacity: 1, cursor: "pointer" }
						}}
					>
						Twitter
					</Typography>
				</Link>
				<Link href="https://instagram.com/ManuTheCoder">
					<Typography
						variant="h5"
						sx={{
							mb: 0.5,
							opacity: 0.7,
							"&:hover": { opacity: 1, cursor: "pointer" }
						}}
					>
						Instagram
					</Typography>
				</Link>
			</Box>
			<Box sx={{ textAlign: "center", pt: 3 }}>
				<Fab
					onClick={() => window.scrollTo(0, 0)}
					sx={{
						background: "#000!important",
						color: "#fff",
						boxShadow: 0
					}}
				>
					<ExpandLessIcon />
				</Fab>
			</Box>
		</Box>
	);
}

const navButtonStyles = {
	textTransform: "none",
	borderRadius: 9,
	left: 0,
	overflow: "hidden",
	px: 1.5
};
const navStyles = {
	py: 2,
	transition: "all .2s cubic-bezier(.3, .6, .9, 1.3)"
};
function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined
	});

	return React.cloneElement(children, {
		sx: trigger
			? {
					...navStyles,
					background: "rgba(20,20,20,0.9)",
					backdropFilter: "blur(20px)",
					borderRadius: 4,
					mt: "20px",
					mr: "2.5vw",
					width: "calc(100% - 5vw)"
			  }
			: {
					...navStyles,
					background: "transparent",
					backdropFilter: "blur(0)",
					mt: 1
			  }
	});
}

export default function ElevateAppBar(props) {
	let Component = props.Component;
	let pageProps = props.pageProps;
	return (
		<>
			<Head>
				<title>Manu G - Full stack developer & philanthropist</title>
				<meta
					name="title"
					content="Manu G - Full stack developer"
				/>
				<meta
					name="description"
					content="Hey! I'm a full-stack developer who codes in JavaScript, PHP, and Python. I code apps, websites, and discord bots that (hopefully) help make the world a better place!"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://metatags.io/" />
				<meta
					property="og:title"
					content="Manu G - Full stack developer & philanthropist "
				/>
				<meta
					property="og:description"
					content="Hey! I'm a full-stack developer who codes in JavaScript, PHP, and Python. ="
				/>
				<meta
					property="og:image"
					content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://metatags.io/" />
				<meta
					property="twitter:title"
					content="Manu G - Full stack developer & philanthropist "
				/>
				<meta
					property="twitter:description"
					content="Hey! I'm a full-stack developer who codes in JavaScript, PHP, and Python. ="
				/>
				<meta
					property="twitter:image"
					content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
				/>
				<link
					rel="shortcut icon"
					href="https://avatars.githubusercontent.com/u/77016441?v=3"
					type="image/png"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Outfit:wght@600&family=Space+Mono&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar position="fixed" elevation={0}>
					<Toolbar>
						<Link href="/">
							<Typography
								className="font-inter"
								variant="h6"
								component="div"
								sx={{
									flexGrow: 1,
									cursor: "pointer",
									"&:hover": { opacity: 0.9, textDecoration: "underline" },
									fontSize: {
										sm: "20px",
										xs: "15px"
									}
								}}
							>
								@ManuTheCoder
							</Typography>
						</Link>
						<Box>
							<Button
								className="font-inter"
								color="inherit"
								sx={{
									...navButtonStyles,
									display: {
										xs: "none",
										sm: "inline-block"
									}
								}}
							>
								Awards
							</Button>
							<Link href="/posts">
								<Button
									className="font-inter"
									color="inherit"
									sx={{
										...navButtonStyles,
										display: {
											xs: "none",
											sm: "inline-block"
										}
									}}
								>
									Posts
								</Button>
							</Link>
							<Link href="/about">
								<Button
									className="font-inter"
									color="inherit"
									sx={navButtonStyles}
								>
									About
									<Box sx={{ display: { sm: "inline", xs: "none" } }}>
										&nbsp; me
									</Box>
								</Button>
							</Link>
							<Button
								target="_blank"
								className="font-inter"
								color="inherit"
								href="https://github.com/ManuTheCoder"
								sx={{
									...navButtonStyles,
									display: {
										xs: "none",
										sm: "inline-block"
									}
								}}
							>
								GitHub
							</Button>
							<Button
								href="https://blog.manuthecoder.ml"
								target="_blank"
								className="font-inter"
								color="inherit"
								sx={navButtonStyles}
							>
								Blog
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
