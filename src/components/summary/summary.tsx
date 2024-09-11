import { motion, Variants } from "framer-motion"

const itemVariant: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const H2 = ({
    children
}: React.PropsWithChildren) => {
    return (
        <motion.h2
            className="text-lg font-bold"
            variants={itemVariant}
            transition={{ type: "spring" }}
        >
            {children}
        </motion.h2>
    )
}

const P = ({
    children
}: React.PropsWithChildren) => {
    return (
        <motion.p
            variants={itemVariant}
            transition={{ type: "spring" }}
        >
            {children}
        </motion.p>
    )
}

export const Summary = () => {
    return (
        <>
            <H2>Some text here!</H2>

            <P>Some text here!</P>
            <P>Some text here!</P>
            <P>Some text here!</P>
        </>
    )
}