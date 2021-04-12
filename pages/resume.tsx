import React from "react"

import Head from "next/head"
import Link from "next/link";

import style from "../styles/Resume.module.scss";

import Layout from "../components/Layout";

import {motion} from "framer-motion";
import {motionChild, motionContainer} from "../components/motions";

import Undergraduate from "../components/Resume/Undergraduate"

import { EmploymentSection } from "../components/Resume/Employment";
import { EducationProgram } from "../components/Resume/EducationProgram"

const Resume = ({ employments, programs }) => {

    return (
        <Layout footer={false}>
            <Head>
                <title>Resume</title>
            </Head>

            <motion.main {...motionContainer}>

                {/*
                <motion.header {...motionChild} className={style.pdf}>
                    <button>PDF</button>
                </motion.header>
                */}

                {/* Work / Research Experience */}
                <EmploymentSection data={employments} />

                {/* Programs - Undergraduate, Certificate */}
                {programs.map(program => <EducationProgram data={program} />)}

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
        }
    }

}
export default Resume