import React from "react"

import Head from "next/head"
import Link from "next/link";

import style from "../styles/Resume.module.scss";

import Layout from "../components/Layout";

import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../components/motions";

import Undergraduate from "../components/Resume/Undergraduate"
import WorkExperience from "../components/Resume/WorkExperience";

const Resume = () => {

    return (
        <Layout footer={false}>
            <Head>
                <title>Resume</title>
            </Head>

            <motion.main {...motionContainer}>

                {/*
                <motion.header {...motionChild} className={style.pdf}>
                    <button>PDF</button>
                </motion.header>
                */}

                <WorkExperience />

                <Undergraduate />

            </motion.main>
        </Layout>
    )
}

export default Resume