import App from '../App'
import { Heading,Box,Text,Button,Image } from '@chakra-ui/react'
import myPhoto from '../assets/WhatsApp Image 2023-03-07 at 14.20.11.jpeg'
import resume from '../assets/Obasa Ajibola Resume.pdf'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const projectSection =()=>{
    navigate('/project')
  }
  return (
    <App>
      <Box w={'100vw'} h={{xl:'100vh'}} display={'flex'} alignItems={{md:'center'}} justifyContent={'space-around'} flexDirection={{base:'column-reverse',xl:'row'}}>
        <Box w={{xl:'606px'}}>
            <Heading fontSize={{base:'30px' ,md:'60px'}}  color={'#018DB0'} lineHeight={{md:'77px'}} textAlign={'center'}>   
            Hi, I’m Ajibola, a
            <span className='text-[#D1884F]'> Frontend Developer. </span>
            </Heading>
            <Box w={{md:'auto'}} textAlign={{base:'center',md:'start'}} className='px-3 md:p-0'>
                <Text fontSize={'20px'} fontWeight={500}>As a web developer, I bring a unique set of skills and experience that make me a valuable addition to any team. I have a solid foundation in programming languages such as HTML, CSS, JavaScript and TypeScript, as well as experience with frameworks like React and Nextjs . Additionally, I am well-versed in server-side technologies like Node.js and its framework Expressjs, and have experience working with databases like MongoDB. But beyond technical skills, I am a team player who values collaboration and communication. I thrive in environments where I can work with others to solve complex problems and create innovative solutions. I am also dedicated to staying up-to-date with the latest technologies and industry trends, ensuring that my work is always of the highest quality. Overall, I believe that my technical expertise, collaborative mindset, and commitment to excellence make me an ideal candidate for any web development role.</Text>
                <Box display={'flex'}  alignItems={'center'}  justifyContent={{base:"center",xl:"start"}} paddingTop={'10px'} paddingBottom={'10px'}>
                  <Button w={{base:'150px',md:'205px'}} marginRight={'15px'} background={'blue'} color={'#fff'}><a href={resume} download className='w-full h-full flex items-center justify-center'>Resume</a> </Button>
                  <Button onClick={projectSection} w={{base:'150px',md:'205px'}} background={'#fff'} border={'2px'} borderColor={'blue'} color={'blue'}>See My Projects</Button>
                </Box>
            </Box>
        </Box>
        <Box w={{base:'90vw',md:'464px'}} className='mx-auto md:m-0'>
          <Image src={myPhoto} w={{base:'90vw',md:'464px'}} alt='Image of me' h={{base:'400px',md:'489px'}} objectFit={'fit'} borderBottomStartRadius={{md:'200px'}} className='img'/>
        </Box>
      </Box>
    </App>
  )
}

export default Home