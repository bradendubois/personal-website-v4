import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {motion} from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const child = {
  hidden: {
    opacity: 0,
    y: -20
  },
  show: {
    opacity: 1,
    y: 0
  }
}

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <motion.main
            variants={container}
            className={styles.main}
            initial={"hidden"}
            animate={"show"}
        >
          <motion.h1
              className={styles.title}
              variants={child}
          >Hello!</motion.h1>

          <motion.p
              className={styles.description}
              variants={child}
          >I'm Braden, a Computer Science / Philosophy student and student research assistant.</motion.p>

          <motion.p
              className={styles.description}
              variants={child}
          >I'm currently re-building my personal website (again) due to being quite unhappy with the old version. I
            hope to have this version up and running by the end of <strong>December 2020</strong>.</motion.p>

          <motion.p
              className={styles.description}
              variants={child}
          >In the meantime, <a href={"mailto:braden.dubois@usask.ca"}>email me</a>, or check out my <a href={"https://github.com/bradendubois"}>Github</a> or <a href={"https://linkedin.com/in/bradendubois"}>LinkedIn</a>.</motion.p>

        </motion.main>

        <footer className={styles.footer}>
          <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
  )
}
