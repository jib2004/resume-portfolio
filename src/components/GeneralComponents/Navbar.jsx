import { Box, Text,UnorderedList,ListItem } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const {pathname} = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const logo =()=>{
    navigate('/')
  }

  return (
    <Box h={'68px'} w={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'10px'}>
      <Box flexBasis={'50%'}>
        <Text fontWeight={'700'} fontSize={{base:'20px', md:'36px'}} letterSpacing={'-2%'} fill={''} onClick={logo} cursor={'pointer'}>{'<OA/>'}</Text> 
        </Box>
        <UnorderedList display={"flex"} h={{base:'100vh',md:'auto'}} backgroundColor={'#fff'}  flexDirection={{base:"column", md:"row"}} flexBasis={'50%'} position={{base:"fixed",md:"static"}} listStyleType={'none'} justifyContent={{md:'end'}} top={0} right={0} w={{base:'100vw',md:"auto"}} className={`md:translate-x-0 ${isOpen ? ' translate-x-0':' translate-x-[1000px]'} duration-300`}>
        <ListItem  display={{ base: "block", md: "none" }} padding={{base:"10px",md:0}} onClick={handleToggle} ><MdClose className="size-8"/></ListItem>
          <ListItem marginRight={{base:'16px', md:'40px'}} padding={{base:"10px",md:0}} onClick={handleToggle}  fontSize={'24px'} color={pathname === '/' && '#D1884F'} cursor={'pointer'}><Link to={'/'}>Home</Link></ListItem>
          <ListItem marginRight={{base:'16px', md:'40px'}} padding={{base:"10px",md:0}} onClick={handleToggle}  fontSize={'24px'} color={pathname === '/experience' && '#D1884F'} cursor={'pointer'}><Link to={'/experience'}>Experience</Link></ListItem> 
          <ListItem marginRight={{base:'16px', md:'40px'}} padding={{base:"10px",md:0}} onClick={handleToggle} fontSize={{base:'24px',md:'20px',xl:'24px',}} color={pathname === '/about' && '#D1884F'} cursor={'pointer'}><Link to={'/about'}>About Me</Link></ListItem>
          <ListItem marginRight={{base:'16px', md:'40px'}} padding={{base:"10px",md:0}} onClick={handleToggle} fontSize={'24px'} color={pathname === '/project' && '#D1884F'} cursor={'pointer'}><Link to={'/project'}>Projects</Link></ListItem>
        </UnorderedList>
        <div className="block md:hidden"><GiHamburgerMenu className="size-8" onClick={handleToggle} /></div>
    </Box>
  )
}

export default Navbar
