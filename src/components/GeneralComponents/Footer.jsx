import { Box,UnorderedList,ListItem,Link,Image,Heading } from '@chakra-ui/react'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github-sign.png'

const Footer = () => {
  return (
    <Box h={'60px'} paddingRight={'10px'} display={'flex'} alignItems={'center'}>
      <Heading size={''} >CONTACT ME:</Heading>
      <UnorderedList listStyleType={'none'} display={'flex'} alignItems={'center'} gap={'20px'}>
        <ListItem><Link href='https://www.instagram.com/obasaajibola04/' target='_blank'><Image src={instagram} className="size-8"/></Link></ListItem>
        <ListItem><Link href='https://github.com/jib2004' target='_blank'><Image src={github} className="size-8" /></Link></ListItem>
        <ListItem><Link href='https://www.linkedin.com/in/obasa-ajibola-005690242/' target='_blank'><Image src={linkedin} className="size-8" /></Link></ListItem>
      </UnorderedList>
      
    </Box>
  )
}

export default Footer