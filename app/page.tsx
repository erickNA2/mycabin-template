import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { GiCctvCamera, GiBeech, GiCharging } from "react-icons/gi";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
	return (
		<>
			<section
				id="home"
				className="relative w-screen h-screen flex flex-col items-center md:items-baseline justify-center px-10"
			>
				<div className="absolute w-full h-full top-0 left-0 z-2 bg-gray-800 opacity-60"></div>
				<Image
					src={"/bgrato.jpg"}
					alt="bg"
					quality={75}
					objectFit="cover"
					fill={true}
					className="absolute top-0 left-0 z-1 w-full h-full"
				></Image>
				<div className="flex flex-col items-center md:items-baseline justify-center space-y-6 w-full md:w-3/5 h-1/2  md:border-l-2 border-neutral-100 md:pl-4 z-3">
					<h1 className="text-4xl md:text-5xl text-neutral-100 text-center md:text-left ">
						Find the perfect landscape for a wonderful vacation
					</h1>
					<Button
						variant={"outline"}
						size={"lg"}
						className="rounded-none hover:cursor-pointer"
					>
						Book Today
					</Button>
				</div>
			</section>

			<section
				id="about"
				className="relative w-screen min-h-[140vh] flex flex-col items-center justify-center my-10 md:my-20"
			>
				{/* desktop view */}
				<div className="relative w-full min-h-[140vh] hidden md:grid grid-cols-2 grid-rows-3 px-20">
					<div className="relative w-full h-full shadow-md shadow-neutral-500">
						<Image
							src={"/cover1.jpg"}
							alt="bg"
							quality={75}
							objectFit="cover"
							fill={true}
						></Image>
					</div>
					<div className="relative w-full h-full flex flex-col items-baseline justify-center px-20">
						<h2 className="text-2xl text-left font-semibold">
							Cabins all around the world
						</h2>
						<p className="text-sm text-left ">
							{" "}
							We offer{" "}
							<span className="font-semibold">
								more than 30 Cabins
							</span>{" "}
							in various locations{" "}
							<span className="font-semibold">
								around the globe
							</span>
							, so no meter the mood you're looking for we got you
							covered
						</p>
					</div>

					<div className="relative w-full h-full flex flex-col items-baseline justify-center px-20">
						<h2 className="text-2xl text-left font-semibold">
							Cabins in many styles
						</h2>
						<p className=" text-sm text-left ">
							{" "}
							We work with a wide range of{" "}
							<span className="font-semibold">
								architects, designers and landscape artists
							</span>{" "}
							to make every caban unique to better suit all
							different tastes
						</p>
					</div>
					<div className="relative w-full h-full shadow-md shadow-neutral-500">
						<Image
							src={"/cover3.png"}
							alt="bg"
							quality={75}
							objectFit="cover"
							fill={true}
						></Image>
					</div>

					<div className="relative w-full h-full shadow-md shadow-neutral-500">
						<Image
							src={"/cover2.png"}
							alt="bg"
							quality={75}
							objectFit="cover"
							fill={true}
						></Image>
					</div>
					<div className="relative w-full h-full flex flex-col items-baseline justify-center px-20">
						<h2 className="text-2xl text-left font-semibold">
							Cabins with many isolation levels
						</h2>
						<p className=" text-sm text-left ">
							{" "}
							From{" "}
							<span className="font-semibold">
								1 to 10 miles
							</span>{" "}
							of proximity from the nearest town, you name how
							into the nature you want to be and still sleep safe
							with our security system and team
						</p>
					</div>
				</div>

				{/* mobile view */}
				<div className="relative w-full h-[160vh] md:hidden flex flex-col items-center justify-center px-10">
					<div className="relative w-full h-1/6 shadow-md shadow-neutral-500">
						<Image
							src={"/cover1.jpg"}
							alt="bg"
							quality={75}
							objectFit="cover"
							fill={true}
						></Image>
					</div>
					<div className="relative w-full h-1/6 flex flex-col items-baseline justify-center md:p-20">
						<h2 className="w-full text-2xl text-center font-semibold">
							Cabins all around the world
						</h2>

						<p className="text-sm text-center ">
							{" "}
							We offer{" "}
							<span className="font-semibold">
								more than 30 Cabins
							</span>{" "}
							in various locations{" "}
							<span className="font-semibold">
								around the globe
							</span>
							, so no meter the mood you're looking for we got you
							covered
						</p>
					</div>
					<div className="relative w-full h-1/6 shadow-md shadow-neutral-500">
						<Image
							src={"/cover3.png"}
							alt="bg"
							quality={75}
							objectFit="cover"
							fill={true}
						></Image>
					</div>
					<div className="relative w-full h-1/6 flex flex-col items-baseline justify-center md:p-20">
						<h2 className="text-2xl w-full text-center font-semibold">
							Cabins in many styles
						</h2>
						<p className=" text-sm text-center ">
							{" "}
							We work with a wide range of{" "}
							<span className="font-semibold">
								architects, designers and landscape artists
							</span>{" "}
							to make every caban unique to better suit all
							different tastes
						</p>
					</div>
					<div className="relative w-full h-1/6 shadow-md shadow-neutral-500">
						<Image
							src={"/cover2.png"}
							alt="bg"
							quality={75}
							objectFit="cover"
							fill={true}
						></Image>
					</div>
					<div className="relative w-full h-1/6 flex flex-col items-baseline justify-center md:p-20">
						<h2 className="w-full text-2xl text-center font-semibold">
							Cabins with many isolation levels
						</h2>
						<p className=" text-sm text-center ">
							{" "}
							From{" "}
							<span className="font-semibold">
								1 to 10 miles
							</span>{" "}
							of proximity from the nearest town, you name how
							into the nature you want to be and still sleep safe
							with our security system and team
						</p>
					</div>
				</div>
			</section>

			<section
				id="location"
				className="relative w-screen h-screen bg-neutral-100 flex flex-col items-center justify-center py-2 md:py-10"
			>
				<div className="relative w-full px-10">
					<h1 className="text-4xl text-center font-semibold">
						Locations
					</h1>
					<p className=" text-sm text-center mt-2">
						Explore many Cabins in varios locations around the globe
					</p>
				</div>
				<div className="relative w-full md:w-3/4 h-3/4 m-10">
					<Image
						src={"/mapsbg.png"}
						alt="bg"
						quality={100}
						objectFit="cover"
						fill={true}
						className="shadow-2xl"
					></Image>
				</div>
			</section>

			<section className="relative w-screen md:h-[60vh] flex items-center justify-center px-6 md:px-10">
				<div className="relative w-full h-full grid gap-1 grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1">
					<div className="relative w-full h-full p-10">
						<Card className="flex flex-col items-center justify-around">
							<GiCctvCamera size={50} />
							<CardHeader className="relative w-full">
								<CardTitle className="text-center">
									24h Security
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Cameras de segurança que cobrem um raio de
									550m ao redor de todas as propriedades e uma
									ouvidoria 24h pronta para atender qualquer
									urgencia
								</p>
							</CardContent>
						</Card>
					</div>
					<div className="relative w-full h-full p-10">
						<Card className="flex flex-col items-center justify-around">
							<GiBeech size={50} />
							<CardHeader className="relative w-full">
								<CardTitle className="text-center">
									Surround by Nature
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									All of our locations offer diverse biomes
									and climates, perfect for those interested
									in birdwatching, camping, and exploring in
									general.
								</p>
							</CardContent>
						</Card>
					</div>
					<div className="relative w-full h-full p-10">
						<Card className="flex flex-col items-center justify-around">
							<GiCharging
								size={50}
								color="light-blue"
								opacity={20}
							/>
							<CardHeader className="relative w-full">
								<CardTitle className="text-center">
									Energy Suplly
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									All of our cabins offer reliable energy
									supply. With solar panels and generators,
									you’ll have all the power you need for your
									essentials.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<section
				id="contact"
				className="relative w-screen h-screen flex items-center justify-center px-6 md:px-10"
			>
				<div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1">
					<div className="relative w-full h-full p-2 flex flex-col items-center justify-center">
						<h1 className="text-4xl font-semibold text-center">
							Social
						</h1>
						<p className="text-sm mt-2">
							Reach us on social media, email or phone
						</p>
						<Link href={""} className="text-sm text-blue-500">
							mycaban@contact.com
						</Link>
						<p className="text-sm">(99) 9 9999-9999</p>
						<div className="relative w-1/2 flex items-center justify-evenly mt-8">
							<Link href={"/"}>
								<FaInstagram
									size={34}
									className="transition-all duration-200 hover:scale-120"
								/>
							</Link>
							<Link href={"/"}>
								<FaFacebook
									size={34}
									className="transition-all duration-200 hover:scale-120"
								/>
							</Link>
							<Link href={"/"}>
								<FaWhatsapp
									size={34}
									className="transition-all duration-200 hover:scale-120"
								/>
							</Link>
						</div>
					</div>

					<div>
						<ContactForm></ContactForm>
					</div>
				</div>
			</section>
		</>
	);
}
