import Head from "next/head"
import Link from "next/link";
import { InferGetStaticPropsType } from "next";

import Class from "../components/Resume/Class";
import Layout from "../components/Layout";

import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../components/motions";

import style from "../styles/Resume.module.scss";
import React from "react";

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

const Resume = ({ employments, programs }) => {

    return (
        <Layout footer={false}>
            <Head>
                <title>Resume</title>
            </Head>

            <motion.main {...motionContainer} id={style.resume} >

                {/*
                <motion.header {...motionChild} className={style.pdf}>
                    <button>PDF</button>
                </motion.header>
                */}

                {/* Work / Research Experience */}
                <SectionTitle title={"Work & Research Experience"} />

                <div className={`${style.workContainer} ${style.container}`} >
                    {employments.map(employment =>
                        <motion.div {...motionChild} >
                            <div className={style.header}>
                                <h3>{employment.title}</h3>
                                <h4>{employment.start_month} {employment.start_year} - {employment.end_month} {employment.end_year ?? "Present"}</h4>
                            </div>

                            <ul>
                                {employment.description.map(description => <li>{description}</li>)}
                            </ul>
                        </motion.div>
                    )}
                </div>


                {/* Programs - Undergraduate, Certificate */}
                {programs
                    .map(program =>

                        <div className={style.container}>

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
                                    <p>{program.year_began} - {program.year_finish ?? "Present"}</p>
                                    <p>Saskatoon, SK</p>
                                </div>
                            </motion.div>

                            {/* Relevant Courses */}
                            <motion.div {...motionChild}>
                                <h2>Relevant Courses</h2>
                                <div className={style.courseListsContainer}>
                                    <ul>
                                        {program.courses.map(course =>
                                            <Class subject={course.subject} course={course.course} name={course.name} />
                                        )}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Achievements */}
                            {program.achievements &&
                            <motion.div {...motionChild} >
                                <h2>Achievements</h2>
                                <div>
                                    {program.achievements.map(achievement =>
                                        <div>
                                            <div className={style.header}>
                                                <h3>{achievement.title}</h3>
                                                <div><h3>{achievement.year_modifier} {achievement.year}</h3></div>
                                            </div>

                                            <p>{achievement.description}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>}

                            {/* Groups */}
                            {program.groups &&
                            <motion.div {...motionChild}>
                                <h2>Groups & Societies</h2>
                                <div>
                                    {program.groups.map(group =>
                                    <div>
                                        <div className={style.header}>
                                            <h3>{group.title}</h3>
                                            <div>
                                                <h3>{group.role}</h3>
                                                <h4>{group.join_year} - {group.exit_year ?? "Present"}</h4>
                                            </div>
                                        </div>

                                        {group.details &&
                                        <ul>
                                            {group.details.map(detail => <li>{detail}</li>)}
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
            
            start_year
            start_month
            
            end_year
            end_month
          }
          
          programs {
            
            title
            field
            institution
            location
            year_began
            year_finish
            
            courses {
              subject
              course
              name
            }
            
            achievements {
              title
              description
              year
              year_modifier
            }
            
            groups {
              title
              role
              details
              join_year
              exit_year
            }
          }
          
          employment {
            title
            description
            start_year
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

    return {
        props: {
            employments: data.data.employment,
            programs: data.data.programs
        },

        revalidate: 3600 * 24   // 24 hours
    }

}
export default Resume