export const motionContainer = {
    variants: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    initial: "hidden",
    animate: "show",
};

export const motionContainerSlow = {
    variants: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3,
            },
        },
    },
    initial: "hidden",
    animate: "show",
};

export const motionChild = {
    variants: {
        hidden: {
            opacity: 0,
            y: -20,
        },
        show: {
            opacity: 1,
            y: 0,
        },
    },
};

export const horizontalSlideinRight = {
    variants: {
        hidden: {
            x: 200,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
        },
    },
};

export const horizontalSlideinLeft = {
    variants: {
        hidden: {
            x: -200,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
        },
    },
};
