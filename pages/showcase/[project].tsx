import {GetStaticPaths} from "next";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../../components/motions";
import showcaseStyle from "../../styles/Showcase.module.scss";

import ReactMarkdown from "react-markdown";

import style from "../../styles/Project.module.scss"


type ProjectData = {
    title: string
    description: string
    repositories: {
        host: string
        owner?: string
        repository: string
        title: string
    }[]
    collaborators: {
       title: string
       url?: string
    }[]
    related: {
        title: string
        url: string
    }[]
    year_start: number
    year_end?: number
    year_start_detail: string
    year_end_detail?: string
    content: {
       title: string
       markdown: string
    }[]
}

const Project = ({ project }: { project: ProjectData }) => {

    console.log(project)

    return (
        <Layout footer={false}>
            <Head>
                <title>{project.title}</title>
            </Head>

            <motion.main {...motionContainer} className={showcaseStyle.content} >

                <motion.div className={showcaseStyle.header} {...motionChild}>
                    <h1>{project.title}</h1>
                    <ReactMarkdown>{project.description}</ReactMarkdown>
                </motion.div>

                {/* Links */}
                <div className={style.showcaseDetails} {...motionContainer}>

                    {/* Back button */}
                    <motion.div className={style.back} {...motionChild} whileHover={{scale: 1.1}}>
                        <Link href={"/showcase"}>Back</Link>
                    </motion.div>

                    {/* Related repositories */}
                    {project.repositories.length > 0 && (
                        <motion.div {...motionChild}>
                            {project.repositories.map(link => <a><img src={"/github"} alt={link.title} /></a>)}
                        </motion.div>
                    )}

                    {/* Timeframe */}
                    <motion.div {...motionChild}>
                        <h4>Activity</h4>
                        <p>{project.year_start_detail} {project.year_start} - {project.year_end_detail} {project.year_end}</p>
                    </motion.div>

                    {/* Collaborators */}
                    {project.collaborators.length > 0 && (
                        <motion.div {...motionChild}>
                            <h4>Collaborator(s)</h4>
                            <ul>
                                {project.collaborators.map(person => <li><a href={person.url}>{person.title}</a></li>)}
                            </ul>
                        </motion.div>
                    )}

                    {/* Any related links*/}
                    {project.related.length > 0 && (
                        <motion.div {...motionChild}>
                            <h4>Further</h4>
                            <ul>
                                {project.related.map(item => <li><a href={item.url}>{item.title}</a></li>)}
                            </ul>
                        </motion.div>
                    )}
                </div>

                {/* Sections of Markdown content detailing the project */}
                {project.content.map(block => (
                    <motion.div>
                        <h3>{block.title}</h3>
                        <ReactMarkdown>
                            {block.markdown}
                        </ReactMarkdown>
                    </motion.div>
                ))}

            </motion.main>

        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const apiQuery = `    
        query {
            projects {
                id
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
        .then(json => json.data.projects)

    let result = data.map(x => ({ params: { project: x.id }}))

    return {
        paths: result,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const apiQuery = `
    
        query {

            project(projectID: "${params.project}") {
            
                title
                description
            
                repositories {
                    host
                    owner
                    repository
                    title
                }
             
                year_start
                year_start_detail
                
                year_end
                year_end_detail
                
                collaborators {
                  title
                  url
                }
                
                related {
                  title
                  url
                }
                
                content {
                  title
                  markdown
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
            project: data.project,
        },

        revalidate: 3600 * 24   // 24 hours
    }
}

export default Project