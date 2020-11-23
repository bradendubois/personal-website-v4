import Head from "next/head"
import NavBar from "../../components/NavBar/Navbar";

export const StatisticsProjectDetails = {
    title: "Statistics Software",
    description: <p>A software package supporting <i>do-calculus</i> and other causal inference tools.</p>,
    href: "/showcase/statistics",
    links: [
        {
            href: "https://github.com/bradendubois/probability-code",
            alt: "Github",
            image: "/github-icon.png"
        }
    ]
}

const Statistics = () => {

    return (
        <div>
            <Head>
                <title>Causality</title>
            </Head>
            <NavBar />
            Hey
        </div>
    )
}

export default Statistics