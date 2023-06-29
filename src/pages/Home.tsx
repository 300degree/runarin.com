import { motion } from "framer-motion"

import BlackBoxTransition from "../utils/BlackBoxTransition"

const Home = () => {
  return (
    <>
      <BlackBoxTransition>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.5 }}
        >
        </motion.div>
      </BlackBoxTransition>
    </>
  )
}

export default Home