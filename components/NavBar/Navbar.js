import { useRouter } from "next/router"
import { motion } from "framer-motion"

import style from "./Navbar.module.scss";
import {motionContainer, motionChild} from "../motions";

// Settings / Motion variants for each respective link.
/* show is a function that takes i (custom={} in component)
 * to create a dynamic variant. i is the distance (in index)
 * a link is from the current page, to make a "wave" from the
 * current link to all others.
 */

const nav = [
    "/",
    "/showcase",
    "/resume",
]

// Map a link to its displayed title
const mapping = {
    "/": "Home",
    "/showcase": "Showcase",
    "/resume": "Resume",
}

export const NavBar = () => {

    const router = useRouter()
    const page = router.pathname

    const Link = ({href}) => {

        return (
            <motion.a
                {...motionChild}
                custom={Math.abs(nav.indexOf(page) - nav.indexOf(href))}
                onClick={() => { page !== href && router.push(href) }}
                className={`${style.navLink} ${page === href ? style.current : style.default}`}
            >{mapping[href]}</motion.a>
        )
    }

    const AltLink = ({href, display}) => {

        return (
            <Link href={href} className={`${style.navLink} ${page === href ? style.current : style.default}`}
            >{display}</Link>
        )
    }

    return (
        <motion.nav{...motionContainer} className={style.container}>
            {/* nav.map((link, i) => <Link href={link} key={i} />) */}

            <AltLink href={"/"} display={"Home"} />
            <AltLink href={"/showcase"} display={"Showcase"} />
            <AltLink href={"/resume"} display={"Resume"} />
        </motion.nav>
    )
}

export default NavBar