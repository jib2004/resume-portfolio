import { Box,UnorderedList,ListItem,Link } from '@chakra-ui/react'
import { FaInstagram,FaGithub,FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <Box h={'60px'} display={'flex'} alignItems={'center'}>
      <UnorderedList listStyleType={'none'} display={'flex'} alignItems={'center'} gap={'20px'}>
        <ListItem><Link href='https://www.instagram.com/obasaajibola04/' target='_blank'><FaInstagram className="size-8"/></Link></ListItem>
        <ListItem><Link href='https://github.com/jib2004' target='_blank'><FaGithub className="size-8" /></Link></ListItem>
        <ListItem><Link href='https://www.linkedin.com/in/obasa-ajibola-005690242/' target='_blank'><FaLinkedin className="size-8" /></Link></ListItem>
      </UnorderedList>
      
    </Box>
  )
}

export default Footer