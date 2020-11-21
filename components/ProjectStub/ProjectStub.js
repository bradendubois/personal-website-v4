import React from "react";
import Link from "next/link";

import {motion} from "framer-motion";

import style from "../../styles/Showcase.module.scss";

const project = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        staggerChildren: 0.3
    },
    hover: {
        opacity: 1,
        staggerChildren: 0.3
    }
}

export const ProjectStub = ({data}) => {

    return (
        <Link href={data.href}>
            <a>
                <motion.div
                    className={style.projectStub}
                    initial={"hidden"}
                    animate={"show"}
                    whileHover={"hover"}
                    variants={project}
                >
                    <motion.h3
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1},
                            hover: { opacity: 0.5 }
                        }}
                    >{data.title}</motion.h3>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 0},
                            hover: { opacity: 1 }
                        }}
                    >
                        <p>{data.description}</p>
                    </motion.div>
                </motion.div>
            </a>
        </Link>
    )
}