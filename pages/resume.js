import React from "react"
import Head from "next/head"
import NavBar from "../components/NavBar/Navbar";
import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../components/motions";
import style from "../styles/Resume.module.scss";
import Link from "next/link";
import Image from "next/image"

const Class = ({name}) => {

    const s = name.split(" - ")
    const url = process.env.catalogue_prefix + s[0].replace(" ", "-")

    return (
        <li><a href={url}>{s[1]}</a></li>
    )
}

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

                {/* Undergraduate */}
                <motion.div {...motionContainer} className={style.programContainer}>

                    <motion.div {...motionChild} >
                        <hr />
                        <h1>Undergraduate</h1>
                        <hr />
                    </motion.div>

                    <motion.div {...motionChild}>
                        <Link href={"https://www.usask.ca"}>
                            <img
                                src={"/usask.png"}
                                alt={"Logo of the University of Saskatchewan"}

                            />
                        </Link>

                        <div>
                            <h3>B.Sc. (Double Honours)</h3>
                            <h4>Computer Science & Philosophy</h4>
                        </div>

                        <div>
                            <p>2017 - 2022</p>
                            <p>Saskatoon, SK</p>
                        </div>
                    </motion.div>

                    {/* Courses Taken */}
                    <motion.div {...motionChild}>

                        <h2>Relevant Courses</h2>

                        <div className={style.courseListsContainer}>
                            <div>
                                <h3>Computer Science</h3>
                                <ul>
                                    <Class name={"CMPT 141 - Intro. to Computer Science"} />
                                    <Class name={"CMPT 145 - Principles of Computer Science"} />
                                    <Class name={"CMPT 214 - Programming Principles and Practice"} />
                                    <Class name={"CMPT 215 - Intro. to Computer Organization and Architecture"} />
                                    <Class name={"CMPT 260 - Mathematical Logic and Computing"} />
                                    <Class name={"CMPT 270 - Developing Object-Oriented Systems"} />
                                    <Class name={"CMPT 280 - Intermediate Data Structures and Algorithms"} />
                                    <Class name={"CMPT 317 - Intro. to Artificial Intelligence"} />
                                    <Class name={"CMPT 332 - Operating Systems Concepts"} />
                                    <Class name={"CMPT 353 - Full Stack Web Programming"} />
                                    <Class name={"CMPT 360 - Machines and Algorithms"} />
                                    <Class name={"CMPT 364 - Automata and Formal Language"} />
                                    <Class name={"CMPT 370 - Intermediate Software Engineering"} />
                                </ul>
                            </div>

                            <div>
                                <h3>Philosophy</h3>
                                <ul>
                                    <Class name={"PHIL 120 - Knowledge, Mind, and Existence"} />
                                    <Class name={"PHIL 133 - Intro. to Ethics and Values"} />
                                    <Class name={"PHIL 206 - Early Modern Philosophy"} />
                                    <Class name={"PHIL 232 - Ethics and Professional Responsibility in Computer Science"} />
                                    <Class name={"PHIL 233 - Ethical Theory"} />
                                    <Class name={"PHIL 236 - Ethics and Technology"} />
                                    <Class name={"PHIL 262 - Social and Political Philosophy"} />
                                    <Class name={"PHIL 298 - Philosophy of Emotions"} />
                                    <Class name={"PHIL 319 - Phenomenology of Merleau-Ponty"} />
                                    <Class name={"PHIL 333 - Metaethics: Morality, Objectivity, and Identity"} />
                                    <Class name={"PHIL 433 - Kantian Ethics"} />
                                </ul>
                            </div>

                        </div>

                    </motion.div>

                    {/* Experience */}
                    <motion.div {...motionChild}>

                        <h2>Experience</h2>

                        <div>

                            {/* Research Assistant */}
                            <div>
                                <div>
                                    <h3>Student Research Assistant</h3>
                                    <div>
                                        <h4>Spring 2020 - Present</h4>
                                    </div>
                                </div>

                                <p>Work as a student research assistant has been under the supervision of <a
                                    href={"https://www.cs.usask.ca/faculty/eric/"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >Dr. Eric Neufeld</a>, since May 2020. This research has been focused primarily on the
                                    work of Judea Pearl on causal inference in statistics. See more on my
                                    research <Link href={"/research"}>here</Link> or the associated statistics
                                    project <Link href={"/showcase/statistics"}>here</Link>.
                                </p>

                            </div>

                            {/* TA / Marking Work */}
                            <div>
                                <div>
                                    <h3>Student Teaching Assistant / Marker</h3>
                                    <div>
                                        <h4>Fall 2020</h4>
                                    </div>
                                </div>

                                <p>Marker for CMPT 140 - Introduction to Creative Computing.</p>
                            </div>

                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div {...motionChild}>

                        <h2>Achievements</h2>

                        <div>

                            {/* CS USRA */}
                            <div>
                                <div>
                                    <h3>Computer Science USRA</h3>
                                    <div>
                                        <h4>Summer 2020</h4>
                                    </div>
                                </div>

                                <p>Recipient of a Department of Computer Science Undergraduate Student Research Assistant
                                    award. Research conducted under the supervision of <a
                                        href={"https://www.cs.usask.ca/faculty/eric/"}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                    >Dr. Eric Neufeld</a> for the Spring/Summer of 2020.</p>
                            </div>


                            {/* Competitive Programming */}
                            <div>
                                <div>
                                    <h3>Competitive Programming</h3>
                                    <div>
                                        <h4>Fall 2019</h4>
                                    </div>
                                </div>

                                <p>Winning team of the Advanced category for the Local Qualifier in the ACM
                                    Inter-Collegiate Programming Contest at the University of Saskatchewan. Competed in the
                                    Rocky Mountain Regional Qualifier in Edmonton in October 2019.</p>
                            </div>

                            {/* Unix Bootcamps */}
                            <div>
                                <div>
                                    <h3>Unix Bootcamp Presentations</h3>
                                    <div>
                                        <h4>Fall 2019</h4>
                                    </div>
                                </div>

                                <p>Co-prepared and delivered intermediate-level presentations for the <a
                                    href={"http://csss.usask.ca/"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >CSSS</a>'s Unix Bootcamp.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Groups / Societies */}
                    <motion.div {...motionChild}>

                        <h2>Groups & Societies</h2>

                        <div>

                            <div>

                                <div>
                                    <h3>Arts and Science Students' Union</h3>

                                    <div>
                                        <h4>Technical Manager</h4>
                                        <h4>2017 - 2020</h4>
                                    </div>
                                </div>

                                <ul>
                                    <li>Responsible for maintaining the ASSU website (<Link
                                        href={"https://assu.usask.ca/"}>assu.usask.ca</Link>).</li>
                                    <li>General technical support.</li>
                                </ul>
                            </div>

                            <div>
                                <div>
                                    <h3>Competitive Programming Club</h3>

                                    <div>
                                        <h4>Member</h4>
                                        <h4>2019 - Present</h4>
                                    </div>
                                </div>

                                <ul>
                                    <li>
                                        The Competitive Programming Club collaborates to share information and
                                        strategies amongst its members to improve at competitive programming in the form
                                        of contests and various online judges.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div>
                                    <h3>Cyber Security Team</h3>

                                    <div>
                                        <h4>Member</h4>
                                        <h4>2019 - Present</h4>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h3>Computer Science Students' Society</h3>

                                    <div>
                                        <h4>Member</h4>
                                        <h4>2017 - Present</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

            </motion.main>
        </div>
    )
}

export default Resume