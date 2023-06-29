import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-[#0e0a03] h-20">
      <div className="pl-96 pr-96 mx-auto h-full flex items-center justify-between">
        <a href="/" className="text-3xl text-white ">
          紅kurenai
        </a>

        <div className="">
          <ul className="flex items-center justify-center space-x-8">
            <li>
              <Link to="/about" className="text-white text-lg duration-300 hover:text-yellow-500">
                アバウト
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white text-lg duration-300 hover:text-yellow-500">
                プロジェクト
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white text-lg duration-300 hover:text-yellow-500">
                お問い合わせ
              </Link>
            </li>
            <li>
              <button className="bg-yellow-500 duration-300 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-full">
                Donate
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar