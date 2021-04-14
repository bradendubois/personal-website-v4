import Head from "next/head"
import Link from "next/link"

import { ShowcaseDetails } from "../../components/ShowcaseDetails/ShowcaseDetails"

import { motion } from "framer-motion"
import { motionContainer, motionChild } from "../../components/motions"

import showcaseStyle from "../../styles/Showcase.module.scss"
import Layout from "../../components/Layout";

export const GraphQLProjectDetails = {
    title: "GraphQL API",
    description: <p>An avant-garde resume built in GraphQL, using the reference implementation.</p>,
    href: "/showcase/GraphQL",
    id: "graphql",
    links: [
        {
            href: `https://github.com/${process.env.github}/${process.env.do_calculus}`,
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
        <Layout footer={false}>
            <Head>
                <title>Statistics</title>
            </Head>

            <motion.main {...motionContainer} className={showcaseStyle.content} >

                <motion.div className={showcaseStyle.header} {...motionChild}>
                    <h1>{GraphQLProjectDetails.title}</h1>
                    {GraphQLProjectDetails.description}
                </motion.div>

                <ShowcaseDetails data={GraphQLProjectDetails} {...motionChild} />

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
                        hosted <a href={`https://github.com/${process.env.github}/${process.env.do_calculus}`}>on Github</a>.
                        An <strong>API</strong> is implemented, and the package can be installed through <a href={`https://pypi.org/project/do-calculus`}>PyPI</a>.
                    </p>
                </motion.div>

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Implementation Details</h3>
                    <p>
                        Measurements of interventional distributions in semi-Markovian models (a sentence that would've
                        made me faint when starting!) is completely possible through the "backdoor-criterion" or "front-door
                        criterion", or by Shpitser and Pearl, 2006. At its core, it is basic inference rules, performed
                        on an augmented graph space, in either approach. With <i>do-calculus</i>, we also add three
                        additional rules. A further write-up showcasing each step will be made available on this website
                        in future.
                    </p>
                </motion.div>

            </motion.main>

        </Layout>
    )
}

export default Statistics