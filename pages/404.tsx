import Head from "next/head";
import router from "next/router";

import { useState, useEffect } from "react";

import Layout from "../components/Layout";

import { motion } from "framer-motion";
import { motionChild, motionContainer } from "../components/motions";

import style from "../styles/404.module.scss";

const Custom404 = () => {
    const [seconds, setSeconds] = useState(10);
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        if (cancelled) return;

        if (seconds === 0) {
            router.push("/");
        }

        setTimeout(() => setSeconds(seconds - 1), 1000);
    }, [seconds]);

    return (
        <Layout>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <motion.main {...motionContainer} className={style.error}>
                <motion.h1 {...motionChild}>404 - Page Not Found</motion.h1>

                <motion.p {...motionChild}>
                    You've either found a broken link, or gotten somewhere you shouldn't have.
                </motion.p>

                <motion.p {...motionChild}>You'll be re-directed to the homepage shortly.</motion.p>

                {!cancelled && <motion.h2 {...motionChild}>Redirecting in... {seconds}</motion.h2>}
                {!cancelled && (
                    <motion.button {...motionChild} onClick={() => setCancelled(true)}>
                        Cancel Redirect
                    </motion.button>
                )}

                {cancelled && <motion.p {...motionChild}>Not a lot of reason to stay here, but alright.</motion.p>}
            </motion.main>
        </Layout>
    );
};

export default Custom404;
