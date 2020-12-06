import React from "react"
import Head from "next/head"
import NavBar from "../components/NavBar/Navbar";
import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../components/motions";
import style from "../styles/Showcase.module.scss";
import Link from "next/link";

const Resume = () => {

    return (
        <div>
            <Head>
                <title>Resume</title>
            </Head>
            <motion.main {...motionContainer}>

                <motion.div {...motionChild} >
                    <motion.h1 {...motionChild}>Resume</motion.h1>
                </motion.div>

                <motion.div {...motionChild}>

                </motion.div>

            </motion.main>
        </div>
    )
}

export default Resume