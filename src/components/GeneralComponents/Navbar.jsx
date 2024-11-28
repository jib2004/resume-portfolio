import { Box,UnorderedList,ListItem, Heading} from "@chakra-ui/react"
import resume from '../../assets/Obasa_Ajibola_Resme.pdf'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link,useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useState,useContext } from "react";
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { ThemeContext } from "../../useContext/context";

const Navbar = () => {
  const {theme,toggleTheme} = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  
  const logo =()=>{
    navigate('/')
  }

  return (
    <Box h={'68px'} w={'100%'}  display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'10px'} >
      <Box flexBasis={'40%'}>
        <Heading fontWeight={'700'} color={theme === "light" ? "#111827" : "#F9FAFB"}  fontSize={{base:'20px', md:'36px'}} letterSpacing={'-2%'} fill={''} onClick={logo} cursor={'pointer'}>{'<OA/>'}</Heading> 
        </Box>
        <UnorderedList  display={"flex"} gap={{base:0,md:"20px",xl:"40px"}} h={{base:'100vh',md:'auto'}}   flexDirection={{base:"column", md:"row"}} flexBasis={'60%'} position={{base:"fixed",md:"static"}} listStyleType={'none'} justifyContent={{md:'end'}} alignItems={{md:"center"}} top={0} right={0} w={{base:'100vw',md:"auto"}} className={`z-50 md:translate-x-0 ${isOpen ? ' translate-x-0':' translate-x-[1000px]'} ${theme === "light" ? "bg-white text-gray-600":" bg-gray-950 text-white"}}  duration-300 `}>
        <ListItem  display={{ base: "block", md: "none" }}  padding={{base:"10px",md:0}} onClick={handleToggle} ><MdClose className="size-8"/></ListItem>
          <ListItem marginRight={{base:0,md:0 }} padding={{base:"10px",md:0}} onClick={handleToggle}  fontSize={"1.125rem"} color={theme === "light"? "#4B5563":"#D1D5DB"}  cursor={'pointer'}><a href={'#about'}>About</a></ListItem>
          <ListItem marginRight={{base:0,md:0 }} padding={{base:"10px",md:0}} onClick={handleToggle}  fontSize={"1.125rem"} color={theme === "light"? "#4B5563":"#D1D5DB"}  cursor={'pointer'}><a href={'#experience'}>Experience</a></ListItem> 
          <ListItem marginRight={{base:0,md:0 }} padding={{base:"10px",md:0}} onClick={handleToggle} fontSize={"1.125rem"}  color={theme === "light"? "#4B5563":"#D1D5DB"} cursor={'pointer'}><a href={'#projects'}>Projects</a></ListItem>
          <ListItem marginRight={{base:0,md:0 }} padding={{base:"10px",md:0}} onClick={handleToggle} fontSize={"1.125rem"}  color={theme === "light"? "#4B5563":"#D1D5DB"} cursor={'pointer'}><a href={'#contact'}>Contact</a></ListItem>

          <ListItem className="flex gap-4 md:items-center" flexDirection={{base:"column", md:"row"}}>
            <figure role="button" aria-label="Theme changer"  onClick={()=>{ toggleTheme() }} className="w-fit flex items-center gap-4 cursor-pointer">{theme === "light"? <img src={sun} alt="Light Mode" title="Light Mode" /> : <img src={moon} alt="Dark mode" title="Dark Mode"/>} <figcaption className="md:hidden">Select Theme</figcaption></figure>
            <button aria-label="Download cv" onClick={handleToggle} className={`${theme === "light" ? "bg-gray-900 hover:bg-gray-700  text-white": " bg-white text-gray-900"}  font-medium duration-200 rounded-xl  mr-[0.93rem] h-[36px] md:w-[136px] `}><a href={resume} download className='w-full h-full flex items-center justify-center'>Download CV</a> </button>
            </ListItem>
        </UnorderedList>
        <div className="block md:hidden"><GiHamburgerMenu className="size-8" onClick={handleToggle} /></div>
    </Box>
  )
}

export default Navbar
