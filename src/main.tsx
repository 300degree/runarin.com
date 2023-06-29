import { BrowserRouter } from "react-router-dom"
import { StrictMode, Suspense } from "react"
import ReactDOM from "react-dom/client"

import Layout from "./components/Layout.tsx"
import Loading from "./pages/Loading"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
