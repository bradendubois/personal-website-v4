
import Head from "next/head"
import Link from "next/link"

import NavBar from "../../components/NavBar/Navbar";

import { motion } from "framer-motion"
import { motionContainer, motionChild } from "../../components/motions"

import showcaseStyle from "../../styles/Showcase.module.scss"
import styles from "../../styles/Home.module.css";
import { ShowcaseDetails } from "../../components/ShowcaseDetails/ShowcaseDetails"
export const StatisticsProjectDetails = {
    title: "Statistics Software",
    description: <p>A software package supporting <i>do-calculus</i> and other causal inference tools.</p>,
    href: "/showcase/statistics",
    links: [
        {
            href: "https://github.com/bradendubois/probability-code",
            alt: "Github",
            image: "/github-icon.png"
        }
    ],
    active: {
        start: "May 2020"
    },
    collaborators: [
        "Dr. Eric Neufeld"
    ],
    related: [
        <Link href={"/research"}>@research</Link>,
        <a href={"https://www.cs.usask.ca/people/faculty%20profiles/eric-neufeld.php"}>Dr. Eric Neufeld</a>
    ]
}

const Statistics = () => {

    return (
        <div>
            <Head>
                <title>Statistics</title>
            </Head>
            {/* <NavBar /> */}

            <motion.main {...motionContainer} className={showcaseStyle.content}>

                <motion.div className={showcaseStyle.header} {...motionChild}>
                    <h1>{StatisticsProjectDetails.title}</h1>
                    {StatisticsProjectDetails.description}
                </motion.div>

                <ShowcaseDetails data={StatisticsProjectDetails} {...motionChild} />

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Origin</h3>
                    <p>
                        This project began under the supervision of Dr. Neufeld in <strong>May 2020</strong> while I
                        was a Summer Research Assistant at the University of Saskatchewan. This role ran from May 2020
                        to <strong>August 2020</strong>, though I have continued as a Student Research Assistant since.
                        I have enjoyed this opportunity to work with Dr. Neufeld on this project (and a few other
                        things!) and learned much in the process.
                    </p>
                </motion.div>

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Scope / Scale</h3>
                    <p>
                        This project implements the entire <strong>do-calculus</strong> of <a href={"http://bayes.cs.ucla.edu/jp_home.html"}>Judea Pearl</a> et.
                        al, as well as the identification algorithm presented
                        in <a href={"https://arxiv.org/abs/1206.6876"}>Shpitser and Pearl, 2006</a>. This work takes a
                        graphical approach to enable the measurement of interventional distributions from observational
                        data. This category of work is essentially a <strong>heavily-modified Bayesian network</strong>,
                        and so this project is also a fully-functional Bayesian net, enabling standard probability
                        queries as well.
                    </p>
                </motion.div>

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Technical Details</h3>
                    <p>
                        The project is built entirely in <strong>Python</strong>, and is
                        hosted <a href={"https://github.com/radendubois/probability-code"}>on Github</a>. There is
                        currently a main REPL system that allows the user to examine the graphical models presented
                        throughout <i>Causality</i> (Pearl 2000, 2009), and <i>The Book of Why</i> (Pearl, Mackenzie,
                        2018), though models can be added to the software. As well, an <strong>API</strong> and,
                        subsequently, availability on the <strong>Python Package Index</strong> (PyPI) for integration
                        into other projects is planned. Documentation on adding models is <a href={"https://github.com/bradendubois/probability-code/blob/master/documentation/causal_graph_files.md"}>available here</a>.
                    </p>
                </motion.div>

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Implementation Details</h3>
                    <p>
                        Measurements of interventional distributions in semi-Markovian models (a sentence that would've
                        made me faint in May!) is completely possible through the "backdoor-criterion" or "front-door
                        criterion", or by Shpitser and Pearl, 2006. At its core, it is basic inference rules, performed
                        on an augmented graph space, in either approach. With <i>do-calculus</i>, we also add three
                        additional rules. A further write-up showcasing each step will be made available on this website
                        in future.
                    </p>
                </motion.div>

            </motion.main>

        </div>
    )
}

export default Statistics