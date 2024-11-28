import App from '../App'
import { Heading,Box,Text,Image } from '@chakra-ui/react'
import myPhoto from '../assets/WhatsApp Image 2023-03-07 at 14.20.11.jpeg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../useContext/context'
import location from '../assets/location.svg'
import avilable from '../assets/avilable.svg'
import About from './About'
import git from '../assets/gitHeader.svg'
import linkedin from '../assets/icons8-linkedin (1).svg'
import Experience from './Experience'
import ShillDisplay from './ShillDisplay'
import Projects from './Projects'

const Home = () => {
  const navigate = useNavigate();
  const {theme} = useContext(ThemeContext);
  const projectSection =()=>{
    navigate('/project')
  }
  return (
    <App>
      <Box w={'100vw'} h={{xl:'552px'}}  display={'flex'} alignItems={{md:'center'}} justifyContent={'space-around'} flexDirection={{base:'column-reverse',xl:'row'}}>
        <Box w={{xl:'850px'}} display={"flex"} flexDirection={"column"} gap={"20px"}>
            
            <Box w={{md:'auto'}} textAlign={{base:'center',md:'start'}} className='px-3  xl:p-0'>
            <Heading fontSize={{base:'30px' ,md:'60px'}}  color={theme === "light" ? "#111827" : "#F9FAFB"} lineHeight={{md:'77px'}} >   
            Hi, I&apos;m Ajibola
            </Heading>
                <Text fontSize={'1.125rem'} textAlign={'justify'}>
                I&apos;m a skilled web developer with expertise in HTML, CSS, JavaScript, TypeScript, and frameworks like React and Next.js.
                I am also experienced in server-side development using Node.js and Express.js and database management with MongoDB. 
                A collaborative team player, I excel in solving complex problems and delivering innovative solutions. Committed to staying current with industry trends, I ensure my work is of the highest quality, making me a strong candidate for any web development role.
                </Text>
            </Box>
            <Box> 
            <figure className='flex items-center gap-2 mb-2'>
              <Image src={location} alt='location icon'/>
              <figcaption className={`${theme === "light" ? "text-[#4B5563]": "text-[#D1D5DB]"}  leading-6`}>Lagos, Nigeria</figcaption>
              </figure> 

              <figure className='flex items-center gap-2'>
              <Image src={avilable} alt='green icon'/>
              <figcaption className={`${theme === "light" ? "text-[#4B5563]": "text-[#D1D5DB]"}  leading-6`}>Available for new projects</figcaption>
              </figure> 
            </Box>

            <ul className='flex gap-2'>
              <li className='w-fit'><a href="https://github.com/jib2004" target='_blank'><Image src={git} alt='My github profile' /></a></li>
              <li className='w-fit'><a href="https://www.linkedin.com/in/obasa-ajibola-005690242/" target='_blank'><Image src={linkedin} alt='My linkedIn profile' /></a></li>
            </ul>
        </Box>
        <div className=''>
        <Box width={{base:'280px',md:'400px'}} height={{base:'300px',md:"360px"}} className='mx-auto md:m-0'>
          <figure className={`relative size-fit  before:content-[""] before:absolute md:before:top-10 md:before:left-6 before:w-full before:h-full ${theme === "light" ? 'before:bg-[#E5E7EB]' : 'before:bg-[#374151]'} `}>
          <Image src={myPhoto} 
          position={"relative"} 
          w={{base:'240px',md:'280px'}} 
          alt='Image of me' h={{base:'280px',md:'320px'}}     
          loading='lazy'
    objectFit={'fit'} />
    </figure>
        </Box>
        </div>
      </Box>

      <About />
      <ShillDisplay/>
      <Experience/>
      <Projects/>
    </App>
  )
}

export default Home