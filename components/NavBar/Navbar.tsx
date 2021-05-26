import { useRouter } from "next/router";

import { motionContainer, motionChild } from "../../types/motions";
import { motion } from "framer-motion";

import style from "./Navbar.module.scss";

export const NavBar = () => {
	const router = useRouter();
	const page = router.pathname;

	const Link = ({ href, display }) => (
		<motion.a
			{...motionChild}
			onClick={() => {
				page !== href && router.push(href);
			}}
			className={`${style.navLink} ${page === href ? style.current : style.default}`}
		>
			{display}
		</motion.a>
	);

	return (
		<motion.nav {...motionContainer} className={style.container}>
			<Link href={"/"} display={"Home"} />
			<Link href={"/showcase"} display={"Showcase"} />
			<Link href={"/resume"} display={"Resume"} />
		</motion.nav>
	);
};

export default NavBar;
