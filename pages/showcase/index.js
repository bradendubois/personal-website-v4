import React from "react"
import Head from "next/head"
import Link from "next/link"
import router from "next/router"
import useSWR from "swr"

import {GithubProfile} from "../../components/GithubProfile/GithubProfile"

import Particles from "react-particles-js";

import {motion} from "framer-motion"

import {ProjectStub} from "../../components/ProjectStub/ProjectStub";
import NavBar from "../../components/NavBar/Navbar";

import {StatisticsProjectDetails} from "./statistics";
import {CompetitiveProgrammingDetails} from "./competitive-programming";

import style from "../../styles/Showcase.module.scss"
import {motionChild, motionContainer} from "../../components/motions";

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


            <motion.div
                className={style.headerDiv}
                {...motionContainer}
            >
                <motion.h1 {...motionChild}>Showcase</motion.h1>
                <motion.p {...motionChild}>
                    Selected projects from my <Link href={"/research"}>research</Link> or done out of personal interest.
                </motion.p>
            </motion.div>

            <motion.main {...motionContainer}>

                <div className={style.mainTextContainer} {...motionChild}>
                    <p>
                        I write software as a part of my <Link href={"/research"}>Research</Link>, as well in various
                        projects of personal interest. Any publicly-available project is accessible from
                        my <a href={`https://github.com/${process.env.github}`}>Github (/{`${process.env.github}`})</a>.
                        Particular areas of interest are <strong>web-projects</strong> and <strong>competitive
                        programming</strong>.
                    </p>
                </div>

                <motion.h2 {...motionChild}>Featured Projects</motion.h2>

                <motion.div
                    className={style.showcasePreviews}
                    {...motionContainer}
                >
                    {Projects.map((details, i) => <ProjectStub key={i} data={details} />)}
                </motion.div>

            </motion.main>

        </div>
    )
}

export default Showcase