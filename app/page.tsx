import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	
	{ name: "Contact", href: "/contact" },
];

const styles = {
	project: "text-sm text-zinc-500"
}

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					<a download
						href="/RyanCV.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-m b-black rounded-xl duration-500 text-zinc-500 hover:text-zinc-300"
					>
						CV
					</a>
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-m b-black rounded-xl duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Wardware
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, my name is Ryan, I'm (almost) an Imperial College London Graduate. Currently, I'm focusing on developing optimisations to Microsoft's Verona Runtime.
				</h2>
			</div>
			<div className="animate-fade-in">
				<h1 className="text-l text-zinc-100">Projects:</h1>
				<ul>
					<p className={styles.project}>Optimising Behavioural Oriented Concurrency for Parallelism (Final Year Project)</p>
					<p className={styles.project}>Developed various machine learning models, both classification and regression, using supervised learning</p>
					<p className={styles.project}>Created a CNN Segmentation mapper to detect abnormalities in brain scans</p>
					
					<p className={styles.project}>WasteSaver: A mobile app to stop food waste and plan meals</p>
					<p className={styles.project}>Sudoku: an ad free sudoku app with over 9m puzzles</p>
					<p className={styles.project}>PintOS: Developing Schedulers, User App Execution and Virtual Memory into a barebones OS</p>
					<p className={styles.project}>WACC Compiler: Using Scala to implement a compiler for the ICL Wacc Programming language</p>
					<p className={styles.project}>This website!</p>
					<div className="h-4" />
					<p className={styles.project}>Get in touch for more information, I have completed plenty of other projects!</p>
				</ul>
			</div>
		</div>
	);
}
