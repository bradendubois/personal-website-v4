import React from "react";
import Link from "next/link";

import {motion} from "framer-motion";

import style from "./ProjectStub.module.scss";
import {motionChild} from "../motions";

const project = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1
    },
    hover: {
        opacity: 1,
        scale: 1.05
    }
}

export const ProjectStub = ({data}) => {

    return (
        <motion.div {...motionChild}>
            <Link href={data.href} >
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
                                show: { opacity: 1, scale: 1.2, x: 40 },
                                hover: { scale: 0.9, x: -15 }
                            }}
                        >{data.title}</motion.h3>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                show: { opacity: 0},
                                hover: { opacity: 1 }
                            }}
                        >{data.description}</motion.div>
                    </motion.div>
                </a>
            </Link>
        </motion.div>
    )
}