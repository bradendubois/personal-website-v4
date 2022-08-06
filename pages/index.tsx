import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

import style from "../styles/Home.module.scss";

const nest = (tag) => {

    if (Array.isArray(tag)) {
        return tag.map(t => nest(t))
    }

    switch (tag.type) {
        case "article":
        case "body":
        case "head":
        case "html":
        case "div":
            return <div className={style.outer}>
                <span className={style.span}>&lt;{tag.type}&gt;</span>
                <div className={style[tag.type]}>
                    {nest(tag.props.children)}
                </div>
                <span className={style.span}>&lt;/{tag.type}&gt;</span>
            </div>

        case "ul":
            return <div>
                <span className={style.span}>&lt;ul&gt;</span>
                <ul className={style.ul}>
                    {nest(tag.props.children)}
                </ul>
                <span className={style.span}>&lt;/ul&gt;</span>
            </div>
        case "hr":
            return <div className={style.hr}>
                <span className={style.left}>&lt;hr&gt;</span>
                    <hr />
                <span className={style.right}>&lt;/hr&gt;</span>
            </div>

        case "meta":
            return (
                <p className={style.meta}>
                    <span>&lt;meta</span>
                        <span>name="</span>{tag.props.name}<span>"</span>
                        <span>content="</span>{tag.props.content}<span>"</span>
                    <span>/&gt;</span>
                </p>)

        default:
            return React.createElement(tag.type, tag.props, (
                <>
                    <span className={style.left}>&lt;{tag.type}&gt;</span>
                        {tag.props.children}
                    <span className={style.right}>&lt;/{tag.type}&gt;</span>
                </>))
    }
}




const Home = ({ links }) => {

    const github = links.find((link) => link.network === "github");
    const linkedIn = links.find((link) => link.network === "linkedin");
    const email = links.find((link) => link.network === "email");

    const page = nest(<html>

        <head>
            <meta name="author" content="Braden Dubois" />
            <meta name="occupation" content="Software Developer" />
            <meta name="residence" content="Saskatchewan, Canada" />
        </head>

        <body>

            <h1>Braden Dubois</h1>

            <article>

                <p>I'm a <strong>software developer</strong> at <strong>Siemens EDA</strong>. I work on the <strong>Solido IPQA</strong> team (a.k.a. Solido Crosscheck, formerly Fractal Technologies / Crossfire) as a Product Developer.</p>

                <p>During my time as a <strong>&#123;</strong>computer science, philosophy<strong>&#125;</strong> undergraduate student at the <strong>University of Saskatchewan</strong>, I was also a <strong>&#123;</strong>student research, teaching, marking<strong>&#125;</strong> <strong>assistant</strong>. I worked as a research assistant under the supervision of <strong>Dr. Eric Neufeld</strong>, primarily studying causal inference in statistics. I graduated in June 2022. During this time, I also completed a Certificate in <strong>Ethics, Justice, and Law</strong>.</p>

                <p>Outside of work, I enjoy reading, physical activity such as rock climbing, and personal programming projects.</p>

            </article>

            <hr />

            <h2>Relevant Links</h2>
            <ul>
                <li><Link href={github.link}>Github</Link></li>
                <li><Link href={linkedIn.link}>LinkedIn</Link></li>
                <li><Link href={email.link}>Email</Link></li>
                <li><Link href={'/showcase'}>Projects</Link></li>
                <li><Link href={'/resume'}>Resume</Link></li>
            </ul>

        </body>
        

    </html>)

    return (
        <Layout>
            <Head>
                <title>Braden Dubois | Software Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <meta property="og:title" content="Braden Dubois | Software Developer" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.braden.sh" />
                <meta
                    property="og:description"
                    content="Portfolio and Resume of Braden Dubois | Software Developer"
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
