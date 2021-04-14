import React from "react"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/Layout";
import Footer from "../../components/Footer/Footer";

import {motion} from "framer-motion"

import {ProjectStub} from "../../components/ProjectStub/ProjectStub";

import {StatisticsProjectDetails} from "./do-calculus";
import {CompetitiveProgrammingDetails} from "./competitive-programming";
import {xv6ProjectDetails} from "./xv6";

import style from "../../styles/Showcase.module.scss"
import {motionChild, motionContainer} from "../../components/motions";
import {GraphQLProjectDetails} from "./GraphQL";

const Showcase = () => {

    const Projects = [
        StatisticsProjectDetails,
        CompetitiveProgrammingDetails,
        // GraphQLProjectDetails,
        xv6ProjectDetails
    ]

    return (
        <Layout footer={false}>
            <Head>
                <title>Showcase</title>
            </Head>

            <motion.main {...motionContainer}>

                <motion.div
                    className={style.headerDiv}
                    {...motionContainer}
                >
                    <motion.h1 {...motionChild}>Showcase</motion.h1>
                    <motion.p {...motionChild}>
                        Selected projects from my <Link href={"/research"}>research</Link> or done out of personal interest.
                    </motion.p>
                </motion.div>

                <motion.div className={style.mainTextContainer} {...motionChild}>
                    <p>
                        I write software as a part of my <Link href={"/research"}>Research</Link>, as well in various
                        projects of personal interest. Any publicly-available project is accessible from
                        my <a href={`https://github.com/${process.env.github}`}>Github (/{`${process.env.github}`})</a>.
                        Particular areas of interest are <strong>web-projects</strong> and <strong>competitive
                        programming</strong>.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <motion.div {...motionChild}>
                    <h2>Featured Projects</h2>
                    <hr />

                    <div className={style.showcasePreviews}>
                        {Projects.map((details, i) => <ProjectStub key={i} data={details} />)}
                    </div>
                </motion.div>

                {/* Minor / Other Projects */}
                {/*
                <motion.div {...motionChild}>
                    <h2>Other Projects</h2>
                    <hr />

                    <div className={style.showcasePreviews} >
                        {Projects.map((details, i) => <ProjectStub key={i} data={details} />)}
                    </div>
                </motion.div>
                */}

                {/* Github */}
                {/*
                <motion.div {...motionChild}>
                    <h2>Github</h2>
                    <hr />

                    <div className={style.showcasePreviews} >
                        {Projects.map((details, i) => <ProjectStub key={i} data={details} />)}
                    </div>
                </motion.div>
                */}

            </motion.main>

        </Layout>
    )
}

export default Showcase