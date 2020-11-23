import NavBar from "../../components/NavBar/Navbar";

export const CompetitiveProgrammingDetails = {
    title: "Competitive Programming",
    description: "Comp.",
    href: "/showcase/competitive-programming",
    links: [
        {
            href: "https://github.com/bradendubois/probability-code",
            alt: "Github",
            image: "/github-icon.png"
        }
    ]
}

const CompetitiveProgramming = () => {

    return (
        <div>
            <NavBar />
            Hey
        </div>
    )
}

export default CompetitiveProgramming