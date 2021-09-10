import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import { motion } from "framer-motion";
import {
    motionContainer,
    motionChild,
    motionContainerSlow,
    horizontalSlideinRight,
    horizontalSlideinLeft,
} from "../types/motions";

import style from "../styles/Home.module.scss";

const nest = (x) => {


    switch (x.type) {
        case "p":
            return <p>&lt;p&gt;{x.props.children}&lt;/p&gt;</p>
        case "div":
            return <div><p>&lt;div&gt;</p>&lt;/div&gt;</div>
        case "ul":
            return <>
                <p>&lt;ul&gt;</p>
                <ul>
                    {x.props.children.map(c => nest(c))}
                </ul>
                <p>&lt;/ul&gt;</p>
            </>
        case "li":
            return <li>&lt;li&gt;{x.props.children}&lt;/li&gt;</li>
        default:
            throw Error
    }
}

const page = nest(<ul>
    <li>Hi</li>
    <li>There</li>
</ul>)


const Home = ({ links }) => {
    const github = links.find((link) => link.network === "github");
    const linkedIn = links.find((link) => link.network === "linkedin");
    const email = links.find((link) => link.network === "email");

    return (
        <Layout>
            <Head>
                <title>Braden Dubois | Software Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <meta property="og:title" content="Braden Dubois | Software Developer" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.bradendubois.dev" />
                <meta
                    property="og:description"
                    content="Portfolio and Resume of Braden Dubois | Software Developer, Research Assistant"
                />
            </Head>

            <motion.main {...motionContainer} className={style.main}>
                <motion.h1 {...motionChild}>Braden Dubois</motion.h1>

                <motion.div {...motionContainerSlow} className={style.titles}>
                    <motion.p {...horizontalSlideinRight}>Computer Science / Philosophy student</motion.p>
                    <motion.p {...horizontalSlideinRight}>Student Research Assistant</motion.p>
                    <motion.p {...horizontalSlideinRight}>Web dev hobbyist</motion.p>
                </motion.div>

                <motion.hr {...motionChild} />

                <motion.div {...motionContainerSlow} className={style.links}>
                    <motion.div {...horizontalSlideinLeft}>
                        <motion.a href={github.link}>
                            <img title={`github/${github.account}`} alt={"Github Icon"} src={"/github-icon.png"} />
                        </motion.a>
                    </motion.div>

                    <motion.div {...horizontalSlideinLeft}>
                        <motion.a href={linkedIn.link}>
                            <img
                                title={`linkedin/in/${linkedIn.account}`}
                                alt={"LinkedIn Icon"}
                                src={"/linkedin.png"}
                            />
                        </motion.a>
                    </motion.div>

                    <motion.div {...horizontalSlideinLeft}>
                        <motion.a href={email.link}>
                            <img title={email.account} alt={"Email Icon"} src={"/envelope.png"} />
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div {...motionContainerSlow}>
                    <motion.p {...motionChild}>
                        I'm a computer science student at the University of Saskatchewan, and also a student research
                        assistant. In my free time I enjoy competitive programming and various personal programming
                        projects.
                    </motion.p>

                    {page}

                    <motion.p {...motionChild}>
                        Check out <Link href={"/showcase"}>some of my projects</Link>, or{" "}
                        <Link href={"/resume"}>my resume.</Link>
                    </motion.p>
                </motion.div>
            </motion.main>
        </Layout>
    );
};

export const getStaticProps = async (context) => {
    const apiQuery = `
        query {
            socials {
                network
                account
                link
            }
        }
    `;

    const data = await fetch("https://api.bradendubois.dev/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({ query: apiQuery }),
    })
        .then((response) => response.json())
        .then((json) => json.data);

    return {
        props: {
            links: data.socials,
        },

        revalidate: 3600 * 24, // 24 hours
    };
};

export default Home;
