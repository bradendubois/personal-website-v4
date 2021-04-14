import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/Layout";

import { ShowcaseDetails } from "../../components/ShowcaseDetails/ShowcaseDetails"

import { motion } from "framer-motion"
import { motionContainer, motionChild } from "../../components/motions"

import showcaseStyle from "../../styles/Showcase.module.scss"

export const xv6ProjectDetails = {
    title: "xv6 Modifications",
    description: <p>Modifications and features implemented in a private fork of MIT's RISCV xv6 project.</p>,
    href: "/showcase/xv6",
    id: "xv6",
    links: [
        {
            href: `https://github.com/${process.env.github}/${process.env.xv6_public}`,
            alt: "Github",
            image: "/github-icon.png"
        }
    ],
    active: {
        start: "December 2020"
    },
    related: [
        <a href={"https://github.com/mit-pdos/xv6-riscv"}>github/mit-pdos/xv6-riscv</a>,
    ]
}

const xv6 = () => {

    return (
        <Layout footer={false}>
            <Head>
                <title>xv6</title>
            </Head>

            <motion.main {...motionContainer} className={showcaseStyle.content} >

                <motion.div className={showcaseStyle.header} {...motionChild}>
                    <h1>{xv6ProjectDetails.title}</h1>
                    {xv6ProjectDetails.description}
                </motion.div>

                <ShowcaseDetails data={xv6ProjectDetails} {...motionChild} />

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Origin</h3>
                    <p>
                        After taking an <em>Operating Systems</em> class at the University of Saskatchewan, I decided to
                        continue implementing features both from the xv6 MIT book as well as of personal interest. This
                        is the newer RISCV implementation of xv6.
                    </p>
                </motion.div>

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Technical Details</h3>
                    <p>
                        Changes successfully implemented in xv6 include <em>lazy memory allocation</em>,
                        the <em>lseek system call</em>, <em>synchronization primitives (mutexes / semaphores)</em>,
                        and a <em>multi-level feedback queue</em>.
                    </p>
                </motion.div>

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Access</h3>
                    <p>
                        After a discussion with the instructor, I have opted to make this project <em>private</em> by
                        default, and will whitelist access to the repository upon request. Exercises and assignments in
                        operating system courses can only be so original, and a quick Google search
                        of <i>xv6 &lt;feature&gt;</i> already will yield many public repositories of previous assignments.
                        A public repository showcasing the features implemented and changes made is
                        available <Link href={`https://github.com/${process.env.github}/${process.env.xv6_public}`}>here</Link>,
                        and access to the source code with these changes will be granted to potential supervisors,
                        employers, etc. upon request.
                    </p>
                </motion.div>

            </motion.main>

        </Layout>
    )
}

export default xv6