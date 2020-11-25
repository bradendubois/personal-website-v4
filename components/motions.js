

export const motionContainer = { variants: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    },
    initial: "hidden",
    animate: "show"
}

export const motionChild = {
    variants: {
        hidden: {
            opacity: 0,
            y: -20
        },
        show: {
            opacity: 1,
            y: 0
        }
    }
}