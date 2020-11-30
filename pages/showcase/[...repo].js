import Head from "next/head"
import NavBar from "../../components/NavBar/Navbar";

import {useRouter} from "next/router"

import { useState, useEffect } from "react"

import {Github} from "../../components/GithubProfile/GithubProfile"
import useSWR from "swr";

import {motion} from "framer-motion"
import styles from "../../styles/Home.module.css";

import {GithubProject} from "../../components/GithubProject/GithubProject";

const Repo = () => {

    const router = useRouter()
    const { repo } = router.query

    return (
        <div>
            <Head>
                <title>{ repo }</title>
            </Head>

            {repo && <GithubProject repository={repo} />}

        </div>
    )
}

export default Repo