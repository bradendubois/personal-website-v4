import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../motions";
import style from "../../styles/Resume.module.scss";
import Link from "next/link";
import React from "react";

import Class from "./Class"


const Undergraduate = () =>

    <motion.div {...motionContainer} className={style.container}>

        <motion.div {...motionChild} >
            <hr />
            <h1>Undergraduate</h1>
            <hr />
        </motion.div>

        <motion.div {...motionChild} className={style.college_info}>
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

        {/* Certificate */}
        <motion.div {...motionChild} >

            <h2>Certificate</h2>

            <div>
                <div>
                    <div>
                        <div className={style.header}>
                            <div id={style.certificateHeader}>
                                <h3>Certificate of Proficiency</h3>
                                <h4>Ethics, Justice, and Law</h4>
                            </div>

                            <div>
                                <h3>2017 - 2020</h3>
                                <h4>Saskatoon, SK</h4>
                            </div>
                        </div>

                        <p>Completed a Certificate of Proficiency in Ethics, Justice, and Law while completing B.Sc.</p>
                    </div>



                </div>

                <h2>Relevant Courses</h2>

                <ul>
                    <Class name={"PHIL 233 - Ethical Theory"} />
                    <Class name={"PHIL 236 - Ethics and Technology"} />
                    <Class name={"PHIL 262 - Social and Political Philosophy"} />
                    <Class name={"PHIL 333 - Metaethics: Morality, Objectivity, and Identity"} />
                    <Class name={"PHIL 433 - Kantian Ethics"} />
                </ul>
            </div>

        </motion.div>

        {/* Achievements */}
        <motion.div {...motionChild}>

            <h2>Achievements</h2>

            <div>

                {/* CS USRA */}
                <div>
                    <div className={style.header}>
                        <h3>Computer Science USRA</h3>
                        <div>
                            <h3>Summer 2020</h3>
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
                    <div className={style.header}>
                        <h3>Competitive Programming</h3>
                        <div>
                            <h3>Fall 2019</h3>
                        </div>
                    </div>

                    <p>
                        Winning team of the Advanced category for the Local Qualifier in the ACM
                        Inter-Collegiate Programming Contest at the University of Saskatchewan. Competed in the
                        Rocky Mountain Regional Qualifier in Edmonton in October 2019.</p>
                </div>

                {/* Unix Bootcamps */}
                <div>
                    <div className={style.header}>
                        <h3>Unix Bootcamp Presentations</h3>
                        <div>
                            <h3>Fall 2019</h3>
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

                {/* ASSU */}
                <div>
                    <div className={style.header}>
                        <h3>Arts and Science Students' Union</h3>

                        <div>
                            <h3>Technical Manager</h3>
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
                    <div className={style.header}>
                        <h3>Competitive Programming Club</h3>

                        <div>
                            <h3>Member</h3>
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
                    <div className={style.header}>
                        <h3>Cyber Security Team</h3>

                        <div>
                            <h3>Member</h3>
                            <h4>2019 - Present</h4>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={style.header}>
                        <h3>Computer Science Students' Society</h3>

                        <div>
                            <h3>Member</h3>
                            <h4>2017 - Present</h4>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    </motion.div>

export default Undergraduate