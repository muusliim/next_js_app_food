'use client';
import { navData } from "@/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { motion } from "framer-motion";

const Nav = ({containerStyle, linkStyle, underlineStyle}) => {
    const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
        {navData.map((link, i) => (
            <Link key={i} href={link.path}
            className={`${link.path === path && 'text-secondary '} ${linkStyle}`}
            >
                {link.path === path && (
                    <motion.span
                    initial={{y: '-100%'}}
                    animate={{y: 0}}
                    transition={{type: 'spring'}}
                    layoutId="underline"
                    className={`${underlineStyle}`}
                    />
                )}
                {link.name}
            </Link>
        ))}
    </nav>
  )
}

export default Nav