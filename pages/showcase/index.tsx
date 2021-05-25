import React from "react"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/Layout";

import {motion} from "framer-motion"


import ReactMarkdown from "react-markdown";
import style from "../../styles/Showcase.module.scss"
import {motionChild, motionContainer} from "../../components/motions";

type Summary = {
    title: string
    description: string
    id: string
}

const project = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1
    },
    hover: {
        opacity: 1,
        scale: 1.05
    }
}

const ProjectStub = (data: Summary) => {

    return (
        <motion.div {...motionChild} className={style.stubContainer} id={data.id + "-stub"}>
            <Link href={`/showcase/${data.id}`} >
                <a>
                    <motion.div
                        className={style.projectStub}
                        initial={"hidden"}
                        animate={"show"}
                        whileHover={"hover"}
                        variants={project}
                    >
                        <motion.h3
                            variants={{
                                hidden: { opacity: 0 },
                                show: { opacity: 1, scale: 1.2, x: 40 },
                                hover: { scale: 0.9, x: -15 }
                            }}
                        >{data.title}</motion.h3>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                show: { opacity: 0},
                                hover: { opacity: 1 }
                            }}
                        ><ReactMarkdown>{data.description}</ReactMarkdown></motion.div>
                    </motion.div>
                </a>
            </Link>
        </motion.div>
    )
}

const Showcase = ({ projects }) => {


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
                        Selected projects from my research or done out of personal interest.
                    </motion.p>
                </motion.div>

                <motion.div className={style.mainTextContainer} {...motionChild}>
                    <p>
                        I write software as a part of my <Link href={"/resume"}>research</Link>, as well in various
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
                        {projects.map(details => <ProjectStub {...details} />) }
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


export const getStaticProps = async (context) => {

    const apiQuery = `
    
        query {
            projects {
                title
                description
                id
            }
        }
    `

    const data = await fetch("https://api.bradendubois.dev/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ query: apiQuery })
    })
        .then(response => response.json())
        .then(json => json.data)

    return {
        props: {
            projects: data.projects,
        },

        revalidate: 3600 * 24   // 24 hours
    }
}


export default Showcase