import Head from "next/head"
import Link from "next/link";
import { InferGetStaticPropsType } from "next";

import Layout from "../components/Layout";

import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../components/motions";

import style from "../styles/Resume.module.scss";

// TODO
type Employment = {
    title: string;
    description: string[];
    start_year: number;
    start_month: number;
    end_year?: number;
    end_month?: number;
}

// TODO
type Program = {

}

const SectionTitle = ({ title }) =>

    <motion.div {...motionChild} className={style.sectionTitle} >
        <hr />
        <h1>{title}</h1>
        <hr />
    </motion.div>

const Class = ({ subject, course, name }) => {

    const url = `${process.env.catalogue_prefix}${subject}-${course}`

    return (
        <li><a href={url}>{name}</a></li>
    )
}

const TimeReduce = (sy, sd, ey, ed) => {

    let seasonalMap = {
        "January": "Winter",
        "February": "Winter",
        "March": "Winter",
        "April": "Winter",
        "May": "Spring",
        "June": "Spring",
        "July": "Summer",
        "August": "Summer",
        "September": "Fall",
        "October": "Fall",
        "December": "Fall"
    }

    let season1 = seasonalMap[sd] ?? sd

    if (ey === undefined || ey === null) {
        return `${season1} ${sy} - Present`
    }

    let season2 = seasonalMap[ed] ?? ed

    if (sy == ey && season1 === season2) {
        return `${season1} ${sy}`
    }
}

const Resume = ({ employments, programs }) => {

    return (
        <Layout footer={false}>
            <Head>
                <title>Resume</title>
            </Head>

            <motion.main {...motionContainer} id={style.resume} >

                {/* Resume-related links */}
                <motion.header {...motionChild} >
                    {/* <a target={"_blank"} href={"/resume.pdf"}>PDF</a> */}
                    <a target={"_blank"} href={process.env.graphql_page}>Looking for something more fun? See my resume in GraphQL.</a>
                </motion.header>

                {/* Work / Research Experience */}
                <SectionTitle title={"Work & Research Experience"} />

                <div className={`${style.workContainer} ${style.container}`} >
                    {employments
                        .sort((a, b) => {
                            let a_year = a.year_end ?? 3000
                            let b_year = b.year_end ?? 3000
                            return b_year - a_year
                        })
                        .map((employment, i) =>
                        <motion.div key={i} {...motionChild} >
                            <div className={style.header}>
                                <h3>{employment.title}</h3>
                                <h4>{TimeReduce(employment.year_start, employment.year_start_detail, employment.year_end, employment.year_end_detail)}</h4>
                            </div>

                            <ul>
                                {employment.description.map((description, i) => <li key={i}>{description}</li>)}
                            </ul>
                        </motion.div>
                    )}
                </div>


                {/* Programs - Undergraduate, Certificate */}
                {programs
                    .sort((program_a, program_b) => (program_b.year_end ?? 3000) - (program_a.year_end ?? 3000))
                    .map((program, i) =>

                        <div key={i} className={style.container}>

                            {/* Title */}
                            <SectionTitle title={program.title} />

                            {/* Header */}
                            <motion.div {...motionChild} className={style.college_info}>

                                {/* TODO - Proper Image/Link lookup */}
                                <Link href={"https://www.usask.ca"}>
                                    <img
                                        src={"/usask.png"}
                                        alt={"Logo of the University of Saskatchewan"}
                                    />
                                </Link>

                                <div>
                                    <h3>{program.title}</h3>
                                    <h4>{program.field}</h4>
                                </div>

                                <div>
                                    <p>{program.year_start} - {program.year_end ?? "Present"}</p>
                                    <p>Saskatoon, SK</p>
                                </div>
                            </motion.div>

                            {/* Relevant Courses */}
                            <motion.div {...motionChild}>
                                <h2>Relevant Courses</h2>
                                <div className={style.courseListsContainer}>

                                    {Array
                                        .from(new Set(program.courses.map(course => course.subject)))
                                        .map((subject, i) =>
                                            <div key={i}>
                                                <h3>{subject}</h3>
                                                <ul>
                                                    {program.courses
                                                        .filter(course => course.subject === subject)
                                                        .map((course, i) => <Class key={i} {...course} />
                                                    )}
                                                </ul>
                                            </div>)
                                    }
                                </div>
                            </motion.div>

                            {/* Achievements */}
                            {program.achievements?.length > 0 &&
                            <motion.div {...motionChild} >
                                <h2>Achievements</h2>
                                <div>
                                    {program.achievements
                                        .map((achievement, i) =>
                                        <div key={i}>
                                            <div className={style.header}>
                                                <h3>{achievement.title}</h3>
                                                <div><h3>{achievement.year_detail} {achievement.year}</h3></div>
                                            </div>

                                            <p>{achievement.description}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>}

                            {/* Groups */}
                            {program.groups?.length > 0 &&
                            <motion.div {...motionChild}>
                                <h2>Groups & Societies</h2>
                                <div>
                                    {program.groups.map((group, i) =>
                                    <div key={i}>
                                        <div className={style.header}>
                                            <h3>{group.title}</h3>
                                            <div>
                                                <h3>{group.role}</h3>
                                                <h4>{group.year_start} - {group.year_end ?? "Present"}</h4>
                                            </div>
                                        </div>

                                        {group.details?.length > 0 &&
                                        <ul>
                                            {Object.values(group.details).map((detail, i) => <li key={i}>{detail}</li>)}
                                        </ul>}
                                    </div>)}
                                </div>
                            </motion.div>}

                        </div>
                    )
                }

            </motion.main>
        </Layout>
    )
}

export const getStaticProps = async (context) => {

    const apiQuery = `
    
        query {
  
          employment {
            
            title
            description
            
            year_start
            year_start_detail
            
            year_end
            year_end_detail
          }
          
          programs {
            
            title
            field
            institution
            location
            year_start
            year_end
            
            courses {
              subject
              course
              name
            }
            
            achievements {
              title
              description
              year
              year_detail
            }
            
            groups {
              title
              role
              details
              year_start
              year_end
            }
          }
        }
    `

    const data = await fetch("https://api.bradendubois.dev/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ query: apiQuery })
    })
        .then(response => response.json())
        .then(json => json.data)

    return {
        props: {
            employments: data.employment,
            programs: data.programs
        },

        revalidate: 3600 * 24   // 24 hours
    }
}

export default Resume