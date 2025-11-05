import Link from "next/link";

export default function Footer() {
	return (
		<>
			<div className="relative w-full h-[40vh] grid grid-cols-3 grid-rows-1 bg-neutral-800 mt-2">
				<div className="relative flex items-center justify-center">
					<Link
						href={"#home"}
						className="text-lg md:text-2xl text-center text-neutral-100"
					>
						<span className="text-blue-400">M</span>yCabin.
					</Link>
				</div>
				<div className="relative w-full h-full flex items-center justify-center">
					<ul className="flex flex-col items-baseline justify-center space-y-2 text-white text-left">
						<li>
							<h1 className="text-lg text-blue-500 font-semibold">
								Navigation
							</h1>
						</li>
						<li>
							<Link href="#home" className="hover:text-blue-400">
								Home
							</Link>
						</li>
						<li>
							<Link href="#about" className="hover:text-blue-400">
								About
							</Link>
						</li>
						<li>
							<Link
								href="#location"
								className="hover:text-blue-400"
							>
								Location
							</Link>
						</li>
						<li>
							<Link
								href="#contact"
								className="hover:text-blue-400"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="relative w-full h-full flex items-center justify-center">
					<ul className="flex flex-col items-baseline justify-center space-y-2 text-white text-left">
						<li>
							<h1 className="text-lg text-blue-500 font-semibold">
								Legal
							</h1>
						</li>
						<li>
							<Link href="#home" className="hover:text-blue-400">
								Policies
							</Link>
						</li>
						<li>
							<Link href="#about" className="hover:text-blue-400">
								Contracts
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="relative w-full h-auto p-1 flex items-center justify-center bg-neutral-800">
				<p className="text-sm text-neutral-50 opacity-60">
					Code and Design by Erick Nunes ©2025 - All Rights Reserved
				</p>
			</div>
		</>
	);
}
