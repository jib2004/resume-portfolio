import { Box,Text,Image } from "@chakra-ui/react"
import Tag from "../components/UI/Tag"
import { useContext } from "react"
import { ThemeContext } from "../useContext/context"
import graduationPic from '../assets/WhatsApp Image 2024-11-21 at 19.46.02.jpeg'

const About = () => {
  const {theme} = useContext(ThemeContext)
  return (
  <div id="about" className={`${theme === "light" ? "bg-[#F9FAFB]" : "bg-[#111827]"}   md:p-6 md:h-[100vh] `}>
  <div className="w-[90vw] mx-auto">
  <Tag tagName="About"/>
        <Box w={{base:'100vw'}} display={"flex"} justifyContent={{md:"center"}}  alignItems={{ md:"center"}} className="mx-auto h-full py-6 flex-col xl:flex-row">
          <Box flexBasis={{ base:'100%',md:"40%"}} display={'flex'} justifyContent={'center'} className="mb-4 xl:mb-0">
            <figure className={` w-[289px] md:w-[400px]  z-10 h-[400px] md:h-[480px] relative size-fit xl:before:content-[""]  xl:before:-z-10 xl:before:absolute xl:before:top-6 xl:before:right-10 xl:before:w-full xl:before:h-full ${theme === "light" ? 'before:bg-[#E5E7EB]' : 'before:bg-[#374151]'}`}>
              <Image src={graduationPic} loading="lazy" alt="Image of me on my graduation page" width={"100%"} height={"100%"} objectFit={"contain"}/>
            </figure>
          </Box>
          <Box flexBasis={"60%"} display={"flex"} justifyContent={"center"}>
          <Text lineHeight={"24px"} width={{base:"",md:"600px"}} textAlign={"justify"} >
            As a web developer, I bring a unique set of skills and experience that make me a valuable addition to any team. 
            I have a solid foundation in programming languages such as HTML, CSS, JavaScript and TypeScript, 
            as well as experience with frameworks like React and Nextjs . 
            Additionally, I am well-versed in server-side technologies like Node.js and its 
            framework Expressjs, nestjs and have experience working with databases like MongoDB. 
            But beyond technical skills, I am a team player who values collaboration and communication.
            I thrive in environments where I can work with others to solve complex problems and 
            create innovative solutions. I am also dedicated to staying up-to-date with the latest
            technologies and industry trends, ensuring that my work is always of the highest quality.
            Overall, I believe that my technical expertise, collaborative mindset, and commitment 
            to excellence make me an ideal candidate for any web development role.
            </Text>
          </Box>
            </Box>
            </div>
            </div>
  )
}

export default About