"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			setVisible(
				prevScrollPos > currentScrollPos || currentScrollPos < 10
			);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return (
		<nav
			className={`fixed w-screen top-0 left-0 z-50 backdrop-blur-[1px] bg-linear-to-b from-[#111111aa] to-[#11111111] shadow transition-all duration-500 ease-in-out overflow-hidden ${
				visible ? "h-18" : "h-18"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between p-4">
				<Link
					href={"#home"}
					className="text-lg md:text-2xl text-center text-neutral-100"
				>
					<span className="text-blue-400">M</span>yCabin.
				</Link>

				<div className="flex space-x-6 text-xs md:text-sm text-neutral-100">
					<Link href="#home" className="hover:text-blue-400">
						Home
					</Link>
					<Link href="#about" className="hover:text-blue-400">
						About
					</Link>
					<Link href="#location" className="hover:text-blue-400">
						Location
					</Link>
					<Link href="#contact" className="hover:text-blue-400">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
