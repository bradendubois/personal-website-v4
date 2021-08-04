import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import { motionChild, motionContainer } from "../types/motions";
import { motion } from "framer-motion";

import { TimeReduce } from "../util/timeSimplify";

import style from "../styles/Resume.module.scss";


const Section = ({ children, title }) => (
    <motion.div {...motionChild} className={style.section}>
        <div className={style.title}>
            <hr />
            <h1>{title}</h1>
            <hr />
        </div>
        <div className={`${style.content}`}>
            {children}
        </div>
    </motion.div>
)


const SubSection = ({ children, title, ...props }) => (
    children?.length > 0 &&
    <motion.div {...motionChild} {...props}>
        <h2>{title}</h2>
        <div>{children}</div>
    </motion.div>
)


const Class = ({ subject, course, name }) => {
    const url = `${process.env.catalogue_prefix}${subject}-${course}`;

    return (
        <li>
            <a href={url}>{name}</a>
        </li>
    );
};


const ExperiencePosition = (a) => {
    switch (a) {
        case "high":
            return 3
        case "medium":
            return 2
        case "low":
            return 1
        default:
            return 0
    }
}


const Resume = ({ employments, programs, skills }) => {

    const skillColumn = (column, category) => <ul>{skills
            .filter(skill => skill.category === category)
            .sort((a, b) => (ExperiencePosition(a) - ExperiencePosition(b)))
            .filter((skill, i) => i % 2 == column)
            .map((skill, i) => <li>{skill.name} &nbsp;<span>{"☆".repeat(ExperiencePosition(skill.experience))}</span></li>)}
        </ul>

    return (
        <Layout>
            <Head>
                <title>Resume</title>
            </Head>

            <motion.main {...motionContainer} id={style.resume}>

                {/* Resume-related links */}
                <motion.header {...motionChild}>
                    <a target={"_blank"} href={"/resume.pdf"}>
                        PDF
                    </a>
                    <a target={"_blank"} href={process.env.graphql_page}>
                        Looking for something more fun? See my resume in GraphQL.
                    </a>
                </motion.header>

                {/* Work / Research Experience */}
                <Section title={"Work & Research Experience"}>
                    {employments
                        .sort((a, b) => (b.duration.end?.year ?? 3000) - (a.duration.end?.year ?? 3000))
                        .map((employment, i) => (
                            <motion.div key={i} {...motionChild} className={style.employment}>
                                <div className={style.header}>
                                    <h3>{employment.title}</h3>
                                    <h4>
                                        {TimeReduce(
                                            employment.duration.start.year,
                                            employment.duration.start.detail,
                                            employment.duration.end?.year,
                                            employment.duration.end?.detail
                                        )}
                                    </h4>
                                </div>

                                <ul>
                                    {employment.description.map((description, i) => (
                                        <li key={i}>{description}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                </Section>

                {/* Skills - Languages & Frameworks */}
                <Section title={"Skills"}>
                    {Array.from(new Set(skills.map(skill => skill.category))).map((category, i) =>
                        <SubSection title={category} className={style.skills}>
                            {skillColumn(0, category)}
                            {skillColumn(1, category)}
                        </SubSection>)
                    }
                </Section>

                {/* Programs - Undergraduate, Certificate */}
                {programs
                    .sort((program_a, program_b) => (program_b.duration.end.year ?? 3000) - (program_a.duration.end.year ?? 3000))
                    .map((program, i) => (

                        <Section title={program.title} key={i}>

                            {/* Header */}
                            <motion.div {...motionChild} className={style.college}>
                                {/* TODO - Proper Image/Link lookup */}
                                <Link href={"https://www.usask.ca"}>
                                    <img src={"/usask.png"} alt={"Logo of the University of Saskatchewan"} />
                                </Link>

                                <div>
                                    <h3>{program.title}</h3>
                                    <h4>{program.field}</h4>
                                </div>

                                <div>
                                    <p>
                                        {program.duration.start.year} - {program.duration.end?.year ?? "Present"}
                                    </p>
                                    <p>Saskatoon, SK</p>
                                </div>
                            </motion.div>

                            {/* Relevant Courses */}
                            <motion.div {...motionChild}>
                                <h2>Relevant Courses</h2>
                                <div className={style.courseListsContainer}>
                                    {Array.from(new Set(program.courses.map((course) => course.subject))).map(
                                        (subject, i) => (
                                            <div key={i}>
                                                <h3>{subject}</h3>
                                                <ul>
                                                    {program.courses
                                                        .filter((course) => course.subject === subject)
                                                        .map((course, i) => (
                                                            <Class key={i} {...course} />
                                                        ))}
                                                </ul>
                                            </div>
                                        )
                                    )}
                                </div>
                            </motion.div>

                            {/* Achievements */}
                            {program.achievements?.length > 0 && (
                                <motion.div {...motionChild}>
                                    <h2>Achievements</h2>
                                    <div>
                                        {program.achievements.map((achievement, i) => (
                                            <div key={i}>
                                                <div className={style.header}>
                                                    <h3>{achievement.title}</h3>
                                                    <div>
                                                        <h3>
                                                            {achievement.when.detail} {achievement.when.year}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <p>{achievement.description}</p>
                                            </div>
                                        </div>
                                        <p>{achievement.description}</p>
                                    </div>
                                ))}
                            </SubSection>

                            {/* Groups */}
                            {program.groups?.length > 0 && (
                                <motion.div {...motionChild}>
                                    <h2>Groups & Societies</h2>
                                    <div>
                                        {program.groups.map((group, i) => (
                                            <div key={i}>
                                                <div className={style.header}>
                                                    <h3>{group.title}</h3>
                                                    <div>
                                                        <h3>{group.role}</h3>
                                                        <h4>
                                                            {group.duration.start.year} - {group.duration.end?.year ?? "Present"}
                                                        </h4>
                                                    </div>
                                                </div>

                                        {group.details?.length > 0 && (
                                            <ul>
                                                {Object.values(group.details).map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </SubSection>
                        </Section>
                    ))}
            </motion.main>
        </Layout>
    );
};

export const getStaticProps = async (context) => {
    const apiQuery = `

        query {

          employment {

            title
            description
            
            duration {
              start {
                year
                detail
              }
              end {
                year
                detail
              }
            }
          }

          programs {

            title
            field
            institution
            location
            
            duration {
              start {
                year
              }
              end {
                year
              }
            }
            
            courses {
              subject
              course
              name
            }

            achievements {
              title
              description
              when {
                detail
                year
              }
            }

            groups {
              title
              role
              details
              
              duration {
                start {
                  year
                }
                end {
                  year
                }
              }
            }
          }

          skills {
            name
            category
            experience
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
            employments: data.employment,
            programs: data.programs,
            skills: data.skills
        },

        revalidate: 3600 * 24, // 24 hours
    };
};

export default Resume;
