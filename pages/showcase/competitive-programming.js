import {motion} from "framer-motion";

import NavBar from "../../components/NavBar/Navbar";
import {ShowcaseDetails} from "../../components/ShowcaseDetails/ShowcaseDetails";
import {motionChild, motionContainer} from "../../components/motions";

import showcaseStyle from "../../styles/Showcase.module.scss";

export const CompetitiveProgrammingDetails = {
    title: "Competitive Programming",
    description: <p>Involvement in Competitive Programming on online judges such as Kattis, as well as in the ICPC.</p>,
    href: "/showcase/competitive-programming",
    links: [
        {
            href: `https://github.com/${process.env.github}/${process.env.competitive}`,
            alt: "Github",
            image: "/github-icon.png"
        },
        {
            href: `https://github.com/${process.env.github}/${process.env.advent}`,
            alt: "Github",
            image: "/github-icon.png"
        }
    ],
    active: {
        start: "Fall 2019"
    },
    related: [
        <a href={"https://icpc.global/"}>ICPC</a>,
        <a href={"https://kattis.com"}>Kattis</a>,
        <a href={"https://cpbook.net/"}>Competitive Programming 4</a>
    ]
}

const CompetitiveProgramming = () => {

    return (
        <div>
            {/* <NavBar /> */}

            <motion.main {...motionContainer} className={showcaseStyle.content}>

                <motion.div className={showcaseStyle.header} {...motionChild}>
                    <h1>{CompetitiveProgrammingDetails.title}</h1>
                    {CompetitiveProgrammingDetails.description}
                </motion.div>

                <ShowcaseDetails data={CompetitiveProgrammingDetails} {...motionChild} />


                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Origin</h3>
                    <p>
                        In <strong>Fall 2019</strong>, as a part of an Algorithms class, an offer of bonus marks was
                        made for any group of three in the class to participate in the Local Qualifier for
                        the <a href={"https://icpc.global/"}>2019 ICPC</a>. Our aptly-named team, <strong>CMPT 360 Bonus Marks</strong> ended
                        up winning the Advanced category, and competed in Edmonton for the <strong>Rocky Mountain Regional Qualifier</strong>.
                        We had tons of fun, and I've participated in multiple local official / unofficial competitions
                        since, as well as on my own in online judging systems like <a href={"https://kattis.com"}>Kattis</a>.
                    </p>
                </motion.div>


                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Online Judges</h3>
                    <p>
                        I've maintained a <a href={"https://github.com/bradendubois/competitive-programming"}>repository
                        of solutions</a> to <strong>competitive programming problems</strong> on <a href={"https://open.kattis.com"}>Kattis</a>.
                        Generally, I use easier problems as a means to practice a particular programming language, since
                        the solutions are not typically very deep in theory, or better in one language over another.
                        Anything <strong>below ~3.0</strong> is used to practice <strong>C++</strong>.
                    </p>
                </motion.div>

                <motion.div className={showcaseStyle.textBlock} {...motionChild}>
                    <h3>Advent of Code</h3>
                    <p>
                        I also participate in <a href={"https://adventofcode.com/2020"}>Advent of Code</a>! It's an
                        Advent calendar of programming puzzles that runs from <strong>Dec. 1 - 25</strong>. They are
                        tons of fun, and these problems are used in interviews, university courses, and (mostly)
                        friendly rivalry. I keep a collection of my
                        own <a href={"https://github.com/bradendubois/advent-of-code"}>personal solutions here</a>.
                    </p>
                </motion.div>

            </motion.main>
        </div>
    )
}

export default CompetitiveProgramming