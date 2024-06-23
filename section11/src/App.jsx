import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Search from "./pages/Search.jsx";
import Country from "./pages/Country.jsx";
import Notfound from "./pages/Notfound.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/country/:code" element={<Country/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Layout>
  )
}

export default App
