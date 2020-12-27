import Head from 'next/head'
import Link from "next/link"

import Layout from "../components/Layout";

import {motion} from "framer-motion"
import {motionContainer, motionChild} from "../components/motions";

import styles from '../styles/Home.module.scss'

import Slider from "react-slick";

// Styling for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


const Home = () => {

    return (

        <Layout>
            <Head>
                <title>Braden Dubois</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.main {...motionContainer} className={styles.main}>

                <motion.h1 {...motionChild } className={styles.title}>Hello!</motion.h1>

                <motion.p {...motionChild}>
                    I'm Braden, a Computer Science / Philosophy student and student research assistant.
                </motion.p>

                <motion.p {...motionChild}>
                    I'm currently re-building my personal website (again) due to being quite unhappy with the old
                    version. I hope to have this version up and running by the end
                    of <strong>December 2020</strong>.</motion.p>

                <motion.p {...motionChild}>
                    In the meantime, <a href={"mailto:braden.dubois@usask.ca"}>email me</a>, or check out
                    my <a href={"https://github.com/bradendubois"}>Github</a> or <a href={"https://linkedin.com/in/bradendubois"}>LinkedIn</a>.</motion.p>

                <motion.div {...motionChild}>

                    <p>In the meantime, check out...</p>

                    <Slider {...settings} className={styles.slider}>
                        <Link href={"/resume"}>My resume</Link>
                        <Link href={"/showcase/statistics"}>A statistics project I maintain and develop</Link>
                    </Slider>

              </motion.div>

            </motion.main>

        </Layout>
    )
}

export default Home