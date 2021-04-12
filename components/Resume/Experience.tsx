import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../motions";
import style from "../../styles/Resume.module.scss";
import Link from "next/link";
import React from "react";

const Experience = () =>

    <motion.div {...motionContainer} className={style.container}>
        <motion.div {...motionChild}>
            <hr /><h1>Work & Research Experience</h1><hr />
        </motion.div>

        <motion.div {...motionChild}>

            <div className={style.workContainer}>

                {/* Research Assistant */}
                <motion.div {...motionChild}>
                    <div className={style.header}>
                        <h3>Student Research Assistant</h3>
                        <h4>Spring 2020 - Present</h4>
                    </div>

                    <p>
                        Work as a student research assistant has been under the supervision of <a
                        href={"https://www.cs.usask.ca/faculty/eric/"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >Dr. Eric Neufeld</a>, since May 2020. This research has been focused primarily on
                        the work of Judea Pearl on causal inference in statistics. See {/*more on my
                        research <Link href={"/research"}>here</Link> or */}the associated statistics
                        project <Link href={"/showcase/do-calculus"}>here</Link>.
                    </p>
                </motion.div>

                <motion.div {...motionChild}>
                    <div className={style.header}>
                        <h3>Teaching Assistant</h3>
                        <h4>Winter 2021</h4>
                    </div>
                    <p>Teaching Assistant for CMPT 145 - Principles of Computer Science.</p>
                </motion.div>

                <motion.div {...motionChild}>
                    <div className={style.header}>
                        <h3>Marking Assistant</h3>
                        <h4>Fall 2020</h4>
                    </div>

                    <p>Marking Assistant for CMPT 140 - Introduction to Creative Computing.</p>
                </motion.div>

            </div>

        </motion.div>

    </motion.div>

export default Experience