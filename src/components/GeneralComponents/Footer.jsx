import { Box,UnorderedList,ListItem,Link,Image,Heading } from '@chakra-ui/react'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github-sign.png'
import { useContext } from 'react'
import { ThemeContext } from '../../useContext/context'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Box h={'60px'} className='p-4' display={'flex'} alignItems={'center'} bgColor={theme === "light" ? '#F9FAFB':"#111827"}>
      <Heading size={''} >CONTACT ME:</Heading>
      <UnorderedList listStyleType={'none'} display={'flex'} alignItems={'center'} gap={'20px'}>
        <ListItem><Link href='https://www.instagram.com/obasaajibola04/' target='_blank'><Image alt='Instagram logo' src={instagram} className="size-8 object-contain"/></Link></ListItem>
        <ListItem><Link href='https://github.com/jib2004' target='_blank'><Image src={github} alt='Github logo' className="size-8 object-contain" /></Link></ListItem>
        <ListItem><Link href='https://www.linkedin.com/in/obasa-ajibola-005690242/' target='_blank'><Image alt='LinkedIn logo' src={linkedin} className="size-8 object-contain" /></Link></ListItem>
      </UnorderedList>
    </Box>
  )
}

export default Footer