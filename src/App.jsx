import { useContext,useEffect,useState } from "react"
import Footer from "./components/GeneralComponents/Footer"
import Navbar from "./components/GeneralComponents/Navbar"
import { PropTypes } from "prop-types"
import { ThemeContext } from "./useContext/context"
import LoadingScreen from "./components/LoadingScreen"

function App({children}) {
  const {theme} = useContext(ThemeContext)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        
        const timer = setTimeout(() => {
          setLoading(false); 
        }, 3000);
    
        return () => clearTimeout(timer); 
  }, []);
 

  return (
    <>
    { loading ? 
    <LoadingScreen loadingState={loading}/>
    :
    <div  className={` animate-fadeIn  ${theme === "light" ? "bg-white text-gray-600":" bg-gray-950 text-white"}   ` }>
    <Navbar />
     {children}
     <Footer />
    </div>
    }
    </>
  )
}

App.propTypes={
  children:PropTypes.node.isRequired
}

export default App
