import {GetStaticPaths} from "next";


const Project = ({ project }) => {

    console.log(project)

    return <div>
        Project
    </div>
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