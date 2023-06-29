import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { lazy } from "react"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Projects = lazy(() => import("./pages/Project"))
const Contact = lazy(() => import("./pages/Contact"))
const Donate = lazy(() => import("./pages/Donate"))
const NotFound = lazy(() => import("./pages/404"))

const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
