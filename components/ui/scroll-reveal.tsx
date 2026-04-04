"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  width?: "fit-content" | "100%"
}

export function ScrollReveal({ children, delay = 0, className = "", width = "100%" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  )
}
