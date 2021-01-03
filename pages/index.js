import Head from 'next/head'
import Link from "next/link"
import Layout from "../components/Layout";

import {motion} from "framer-motion"
import {
    motionContainer,
    motionChild,
    motionContainerSlow,
    horizontalSlideinRight,
    horizontalSlideinLeft
} from "../components/motions";

import styles from '../styles/Home.module.scss'


const Home = () => {

    return (

        <Layout>
            <Head>
                <title>Braden Dubois</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.main {...motionContainer} className={styles.main}>

                <motion.h1 {...motionChild } >Braden Dubois</motion.h1>

                <motion.div {...motionContainerSlow} className={styles.titles}>
                    <motion.p {...horizontalSlideinRight}>Computer Science / Philosophy student</motion.p>
                    <motion.p {...horizontalSlideinRight}>Student Research Assistant</motion.p>
                    <motion.p {...horizontalSlideinRight}>Web dev hobbyist</motion.p>
                </motion.div>

                <motion.hr {...motionChild} />

                <motion.div {...motionContainerSlow} className={styles.links}>

                    <motion.div {...horizontalSlideinLeft}>
                        <motion.a href={process.env.github_profile}>
                            <img title={"github/bradendubois"} alt={"Github Icon"} src={'/github-icon.png'} />
                        </motion.a>
                    </motion.div>

                    <motion.div {...horizontalSlideinLeft}>
                        <motion.a href={process.env.linkedin_profile}>
                            <img title={"linkedin/in/bradendubois"} alt={"LinkedIn Icon"} src={'/linkedin.png'} />
                        </motion.a>
                    </motion.div>

                    <motion.div {...horizontalSlideinLeft}>
                        <motion.a href={process.env.email_link}>
                            <img title={"braden.dubois@usask.ca"} alt={"Email Icon"} src={'/envelope.png'} />
                        </motion.a>
                    </motion.div>

                </motion.div>

                <motion.div {...motionContainerSlow}>

                    <motion.p {...motionChild}>
                        I'm a computer science student at the University of Saskatchewan, and also a student research
                        assistant. In my free time I enjoy competitive programming and various personal programming
                        projects.
                    </motion.p>

                    <motion.p {...motionChild}>
                        Check out <Link href={"/showcase"}>some of my projects</Link>, or <Link href={"/resume"}>my
                        resume.</Link>
                    </motion.p>
                </motion.div>

            </motion.main>

        </Layout>
    )
}

export default Home