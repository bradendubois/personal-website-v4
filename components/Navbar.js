import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import style from "../styles/Navbar.module.scss";

// Motion variant for containing div
const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

// Settings / Motion variants for each respective link.
/* show is a function that takes i (custom={} in component)
 * to create a dynamic variant. i is the distance (in index)
 * a link is from the current page, to make a "wave" from the
 * current link to all others.
 */
const settings = {
    rel: "noopener noreferrer",
    variants: {
        hidden: {
            opacity: 0,
            y: -20
        },
        show:  i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 }
        })
    }
}

const nav = [
    "/",
    "/me",
    "/showcase",
    "/research",
    "/resume",
    "/live"
]

// Map a link to its displayed title
const mapping = {
    "/": "Home",
    "/me": "Me",
    "/showcase": "Showcase",
    "/research": "Research",
    "/resume": "Resume",
    "/live": "Live"
}

export const NavBar = () => {

    const router = useRouter()
    const page = router.pathname

    const Link = ({href}) => {

        return (
            <motion.a
                {...settings}
                custom={Math.abs(nav.indexOf(page) - nav.indexOf(href))}
                onClick={() => router.push(href)}
                className={`${style.navLink} ${page === href ? style.current : style.default}`}
            >{mapping[href]}</motion.a>
        )
    }

    return (
        <motion.div
            className={style.container}
            variants={container}
            initial={"hidden"}
            animate={"show"}
        >
            {nav.map((link, i) => <Link href={link} key={i} />)}
        </motion.div>
    )
}

export default NavBar