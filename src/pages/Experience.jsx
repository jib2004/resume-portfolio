import App from "../App"
import { Heading,Box, } from "@chakra-ui/react"
import ExperienceDisplay from "../components/UI/ExperienceDisplay"
import Skills from "../components/UI/Skills"
import html from  '../assets/html-5.png'
import css from  '../assets/css-3.png'
import bootstrap from  '../assets/Bootstrap.png'
import js from  '../assets/js.png'
import react from  '../assets/react.png'
import node from  '../assets/Node.js.png'
import mongo from  '../assets/MongoDB.png'
import nextjs from '../assets/Next.js.png'
import tailwind from '../assets/Tailwind CSS.png'
import git from '../assets/git.png'
import github from '../assets/github-sign.png'
import expressjs from  '../assets/Express.png' 
import postman from '../assets/Postman.png'
import chakra from '../assets/chakra-ui-icon.svg'

const Experience = () => {
  return (
    <App>
        <div className=" min-h-screen">
        <Box>
            <ExperienceDisplay jobTitle={'Frontend Developer Intern'} startDate={'August 2024'} endDate={'Present'} companyname={'InternPulse'} jobDecription={' Designed and implemented a user authentication system, ensuring data security and compliance with industry standards.'} jobDecription1={'Collaborated with senior developers and UI/UX designers to troubleshoot technical issues and improve code efficiency.'} />
        </Box>
        <div className="px-4">
        <Heading marginBottom={'10px'} marginTop={'10px'}>Skills</Heading>
        <Box display={'flex'} flexWrap={'wrap'} w={{xl:'1024px'}} gap={'15px'} className=" xl:mx-auto py-2"> 
            <Skills img={html}/>
            <Skills img={css}/>
            <Skills img={js}/>
            <Skills img={react}/>
            <Skills img={tailwind}/>
            <Skills img={bootstrap}/>
            <Skills img={chakra}/>
            <Skills img={git}/>
            <Skills img={github}/>
            <Skills img={postman}/>
            <Skills img={nextjs}/>
            <Skills img={node}/>
            <Skills img={expressjs}/>
            <Skills img={mongo}/>
        </Box>
        </div>
        </div>
    </App>
  )
}

export default Experience