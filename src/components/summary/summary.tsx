import { motion, Transition, Variants } from "framer-motion"
import { GenericElementProps, LinkProps, ListProps } from "./summary.types"
import { cn } from "@/lib/utils"

export const Summary = () => {
    return (
        <>
            <H2>Gustavo Silvério • Full Stack Developer</H2>

            <H3>About me 💻</H3>
            <P>
                I'm 20 years old, I'm a Full Stack developer at{" "}
                <A href="https://tecnologiaunica.com.br/">Tecnologia Unica</A> with 3 years of experience
                and I'm currently looking to expand my knowledge with new methodologies,
                design patterns, new languages and applying all of this to projects
                that I create along the way.
            </P>

            <H3>Technologies in my arsenal 🛠️</H3>

            <Stack>
                <P>
                    react, next, typescript, javascript, tailwindcss, shadcn ui, figma, prisma
                </P>

                <Divider />

                <P>
                    c#, petapoco, python, sql, no-sql, sql server, mongodb
                </P>

                <Divider />

                <P>
                    web scraping, automation, ubuntu server, git
                </P>
            </Stack>
        </>
    )
}

const itemVariant: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.2 }
    },
}

const itemTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 24
}

const Stack = ({
    children,
    className
}: GenericElementProps) => {
    return (
        <motion.div
            className={cn("flex flex-col gap-2 mx-2", className)}
        >
            {children}
        </motion.div>
    )
}

const Divider = ({ className }: GenericElementProps) => {
    return (
        <motion.div
            className={cn("w-full h-px bg-gray-300", className)}
            variants={itemVariant}
            transition={itemTransition}
        />
    )
}

const A = ({
    children,
    className,
    href,
}: LinkProps) => {
    return (
        <motion.a
            className={cn(
                "text-blue-500 hover:text-blue-600 underline",
                className
            )}
            href={href}
            target="_blank"
        >
            {children}
        </motion.a>
    )
}

const H2 = ({
    children,
    className
}: GenericElementProps) => {
    return (
        <motion.h2
            className={cn(
                "text-2xl font-bold",
                className
            )}
            variants={itemVariant}
            transition={itemTransition}
        >
            {children}
        </motion.h2>
    )
}

const H3 = ({
    children,
    className
}: GenericElementProps) => {
    return (
        <motion.h3
            className={cn(
                "text-xl font-semibold mt-2",
                className
            )}
            variants={itemVariant}
            transition={itemTransition}
        >
            {children}
        </motion.h3>
    )
}

const P = ({
    children,
    className
}: GenericElementProps) => {
    return (
        <motion.p
            className={cn(
                className,
                "text-lg"
            )}
            variants={itemVariant}
            transition={itemTransition}
        >
            {children}
        </motion.p>
    )
}

const List = ({
    items,
    className
}: ListProps) => {
    return (
        <motion.ul
            className={cn(className)}
            variants={{
                open: {
                    transition: {
                        staggerChildren: 0.05,
                    }
                },
                closed: {},
            }}
        >
            {items.map((item, index) => (
                <motion.li
                    className="pl-1"
                    key={index}
                    variants={itemVariant}
                    transition={itemTransition}
                >
                    • {item}
                </motion.li>
            ))}
        </motion.ul>
    )
}
