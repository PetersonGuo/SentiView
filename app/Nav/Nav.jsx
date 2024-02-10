import { Navbar } from "@material-tailwind/react";
import { name } from "../consts";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
	const router = useRouter();
	const pathname = usePathname();
	const reset = () => router.push("/");

	return (
		<AnimatePresence mode="wait" initial={false}>
			<Navbar className="absolute -top-2 md:top-2 pl-[5%] self-start border-0 bg-darkBg">
				<button
					className="flex flex-row top-2 left-20 items-center justify-items-center"
					onClick={reset}
				>
					{pathname === "/info" && (
						<motion.div
							exit={{ x: "100px", y: "-100px", rotate: 30 }}
							animate={{
								x: ["-15%", "25%", "-15%"],
								y: ["15%", "-25%", "15%"],
								rotate: 30,
							}}
							transition={{
								duration: 3,
								ease: "easeInOut",
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="aspect-square rotate-[30deg]"
						>
							<img
								src="/rocketship.png"
								width={60}
								className="cursor-pointer transform-[30deg] left-[-50%] w-[5vw] -top-2"
							/>
						</motion.div>
					)}
					<div className="md:pl-2 tracking-wide drop-shadow-2xl cursor-pointer font-extrabold text-white text-lg md:text-6xl pt-4vh">
						{name}
					</div>
				</button>
			</Navbar>
		</AnimatePresence>
	);
}
