import Footer from "./components/GeneralComponents/Footer"
import Navbar from "./components/GeneralComponents/Navbar"
import { PropTypes } from "prop-types"

function App({children}) {
  return (
    <>
    <Navbar />
     {children}
     <Footer />
    </>
  )
}

App.propTypes={
  children:PropTypes.node.isRequired
}

export default App
