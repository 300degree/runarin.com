import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0e0a03] h-20 w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/300degree" className="hover:underline">KitiboD</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to={"/about"} className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
              <Link to={"/projects"} className="mr-4 hover:underline md:mr-6 ">Projects</Link>
            </li>
            <li>
              <Link to={"/contact"} className="mr-4 hover:underline md:mr-6 ">Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer