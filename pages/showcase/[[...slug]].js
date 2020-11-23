import React from "react"
import Head from "next/head"
import Link from "next/link"
import router from "next/router"
import {motion} from "framer-motion"

import {ProjectStub} from "../../components/ProjectStub/ProjectStub";
import NavBar from "../../components/NavBar/Navbar";

import {StatisticsProjectDetails} from "./statistics";
import {CompetitiveProgrammingDetails} from "./competitive-programming";

import style from "../../styles/Showcase.module.scss"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        staggerChildren: 0.3
    }
}

const child = {
    hidden: {
        opacity: 0,
        y: -20
    },
    show:  {
        opacity: 1,
        y: 0,
    }
}

const Showcase = () => {

    const Projects = [
        StatisticsProjectDetails,
        CompetitiveProgrammingDetails
    ]

    return (
        <div>
            <Head>
                <title>Showcase</title>
            </Head>
            <NavBar />

            <motion.div
                className={style.headerDiv}
                variants={container}
                initial={"hidden"}
                animate={"show"}
            >
                <motion.h1 variants={child}>Showcase</motion.h1>
                {/*<motion.p variants={child}>A collection of </motion.p> */}
            </motion.div>

            <motion.div
                variants={container}
                initial={"hidden"}
                animate={"show"}
            >
                {Projects.map((details, i) => <ProjectStub key={i} data={details} />)}
            </motion.div>

        </div>
    )
}

export default Showcase