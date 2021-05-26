import { GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/Layout";

import ReactMarkdown from "react-markdown";

import { ProjectData, RepositoryLink } from "../../types/types";
import { motionChild, motionContainer } from "../../types/motions";
import { motion } from "framer-motion";

import style from "../../styles/Project.module.scss";
import showcaseStyle from "../../styles/Showcase.module.scss";

const RepoLink = (data: RepositoryLink) => {
    let image = "/github-icon.png";

    // Creates a link around an image, using the host and repository name to generate a link, and will
    //  substitute an 'owner' name if one is provided, defaulting to personal github otherwise
    return (
        <a href={`https://${data.host}.com/${data.owner}/${data.repository}`}>
            <img src={image} alt={data.title} />
        </a>
    );
};

const Project = ({ project }: { project: ProjectData }) => (
    <Layout>
        <Head>
            <title>{project.title}</title>
        </Head>

        <motion.main {...motionContainer} className={showcaseStyle.content}>
            <motion.div className={showcaseStyle.header} {...motionChild}>
                <h1>{project.title}</h1>
                <ReactMarkdown>{project.description}</ReactMarkdown>
            </motion.div>

            {/* Links */}
            <div className={style.showcaseDetails} {...motionContainer}>
                {/* Back button */}
                <motion.div className={style.back} {...motionChild} whileHover={{ scale: 1.1 }}>
                    <Link href={"/showcase"}>Back</Link>
                </motion.div>

                {/* Related repositories */}
                {project.repositories.length > 0 && (
                    <motion.div {...motionChild} className={style.links}>
                        {project.repositories.map((link) => RepoLink(link))}
                    </motion.div>
                )}

                {/* Timeframe */}
                <motion.div {...motionChild}>
                    <h4>Activity</h4>
                    <p>
                        {project.year_start_detail} {project.year_start} - {project.year_end_detail} {project.year_end}
                    </p>
                </motion.div>

                {/* Collaborators */}
                {project.collaborators.length > 0 && (
                    <motion.div {...motionChild}>
                        <h4>Collaborator(s)</h4>
                        <ul>
                            {project.collaborators.map((person) => (
                                <li>
                                    <a href={person.url}>{person.title}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Any related links*/}
                {project.related.length > 0 && (
                    <motion.div {...motionChild}>
                        <h4>Further</h4>
                        <ul>
                            {project.related.map((item) => (
                                <li>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>

            {/* Sections of Markdown content detailing the project */}
            {project.content.map((block) => (
                <motion.div {...motionChild} className={style.markdownBlock}>
                    <h3>{block.title}</h3>
                    <ReactMarkdown>{block.markdown}</ReactMarkdown>
                </motion.div>
            ))}
        </motion.main>
    </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
    const apiQuery = `    
        query {
            projects {
                id
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
        .then((json) => json.data.projects);

    let result = data.map((x) => ({ params: { project: x.id } }));

    return {
        paths: result,
        fallback: false,
    };
};

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
            project: data.project,
        },

        revalidate: 3600 * 24, // 24 hours
    };
};

export default Project;
