import Head from "next/head"
import NavBar from "../../../components/NavBar/Navbar";

import { GithubProfile } from "../../../components/GithubProfile/GithubProfile"
import { GithubRepositories } from "../../../components/GithubRepositories/GithubRepositories"

const Github = () => {

    return (
        <div>
            <Head>
                <title>Github</title>
            </Head>
            <NavBar />

            <GithubProfile />
            <GithubRepositories />

        </div>
    )
}

export default Github