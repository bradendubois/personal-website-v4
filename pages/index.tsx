import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import style from "../styles/Home.module.scss";

const nest = (x) => {

    if (Array.isArray(x)) {
        return x.map(c => nest(c))
    }

    const done = (tag) => {
        return React.createElement(tag.type, tag.props, <><span className={style.left}>&lt;{tag.type}&gt;</span>{tag.props.children}<span className={style.right}>&lt;/{tag.type}&gt;</span></>)
    }

    switch (x.type) {
        case "h1":
        case "h2":
        case "li":
        case "p":
            return done(x)
        case "div":
            return <div {...x.props}><span>&lt;div&gt;</span>{nest(x.props.children)}<span>&lt;/div&gt;</span></div>
        case "ul":
            return <div>
                <span>&lt;ul&gt;</span>
                <ul>
                    {nest(x.props.children)}
                </ul>
                <span>&lt;/ul&gt;</span>
            </div>
        case "hr":
            return <div className={style.hrdiv}>
                <span className={style.left}>&lt;hr&gt;</span>
                    <hr />
                <span className={style.right}>&lt;/hr&gt;</span>
            </div>

        default:
            throw Error
    }
}




const Home = ({ links }) => {

    const github = links.find((link) => link.network === "github");
    const linkedIn = links.find((link) => link.network === "linkedin");
    const email = links.find((link) => link.network === "email");

const page = nest(<div className={style.home}>

        <h1>Braden Dubois</h1>

    <p>I'm a <strong>&#123;</strong>computer science, philosophy<strong>&#125;</strong> undergraduate student and <strong>&#123;</strong>student research, teaching, marking<strong>&#125;</strong> assistant at the University of Saskatchewan. In my free time I enjoy competitive programming and various personal programming projects.</p>

        <hr />

        <h2>Roles & Interests</h2>
        <ul>
            <li>Computer Science & Philosophy student</li>
            <li>Student Research Assistant</li>
            <li>Teaching / Marking Assistant</li>
            <li>Software Engineer</li>
            <li>Competitive Programmer</li>
        </ul>

        <hr />

        <h2>Relevant Links</h2>
        <ul>
            <li><Link href={github.link}>Github</Link></li>
            <li><Link href={linkedIn.link}>LinkedIn</Link></li>
            <li><Link href={email.link}>Email</Link></li>
            <li><Link href={'/showcase'}>Projects</Link></li>
            <li><Link href={'/resume'}>Resume</Link></li>
        </ul>

    </div>)

    return (
        <Layout>
            <Head>
                <title>Braden Dubois | Software Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <meta property="og:title" content="Braden Dubois | Software Developer" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.bradendubois.dev" />
                <meta
                    property="og:description"
                    content="Portfolio and Resume of Braden Dubois | Software Developer, Research Assistant"
                />
            </Head>

            <main className={style.main}>
                {page}
            </main>


        </Layout>
    );
};

export const getStaticProps = async (context) => {
    const apiQuery = `
        query {
            socials {
                network
                account
                link
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
            links: data.socials,
        },

        revalidate: 3600 * 24, // 24 hours
    };
};

export default Home;
