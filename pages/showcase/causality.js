import Head from "next/head"
import NavBar from "../../components/Navbar";

export const CausalityProjectDetails = {
    title: "Causality Project",
    description: "A software package supporting do-calculus and other causal inference tools.",
    href: "/showcase/causality",
    links: [
        {
            href: "https://github.com/bradendubois/probability-code",
            alt: "Github",
            image: "/github-icon.png"
        }
    ]
}

const Causality = () => {

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

export default Causality