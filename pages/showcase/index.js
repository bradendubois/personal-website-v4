import React from "react"
import Head from "next/head"
import Link from "next/link"
import router from "next/router"
import useSWR from "swr"

import {GithubProfile} from "../../components/GithubProfile/GithubProfile"

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
            {/* <NavBar /> */}

            {/* <GithubProfile /> */}

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

                <div {...motionChild}>
                    Ideally, lots of content here!
                </div>

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