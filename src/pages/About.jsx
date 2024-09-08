import App from "../App"
import { Box,Text } from "@chakra-ui/react"

const About = () => {
  return (
    <App>
        <Box w={{base:'90vw'}} textAlign={{base:'center'}} className="mx-auto md:h-[80vh]">
                <Text fontSize={'20px'} fontWeight={500}>As a web developer, I bring a unique set of skills and experience that make me a valuable addition to any team. I have a solid foundation in programming languages such as HTML, CSS, JavaScript and TypeScript, as well as experience with frameworks like React and Nextjs . Additionally, I am well-versed in server-side technologies like Node.js and its framework Expressjs, and have experience working with databases like MongoDB. But beyond technical skills, I am a team player who values collaboration and communication. I thrive in environments where I can work with others to solve complex problems and create innovative solutions. I am also dedicated to staying up-to-date with the latest technologies and industry trends, ensuring that my work is always of the highest quality. Overall, I believe that my technical expertise, collaborative mindset, and commitment to excellence make me an ideal candidate for any web development role.</Text>
            </Box>
    </App>
  )
}

export default About