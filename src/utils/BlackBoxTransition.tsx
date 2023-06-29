import { ReactNode } from "react"
import { motion } from "framer-motion"

interface Props {
  children: ReactNode
}

const BlackBoxTransition = ({ children }: Props) => {
  const transitions = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  }

  return (
    <div className="abosolute">
      <motion.div
        initial="initial"
        animate="animate"
        variants={transitions}
        className="relative bg-white w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default BlackBoxTransition