import { Box } from "@chakra-ui/react"
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
import jira from '../assets/pngegg.png'
import vitest from '../assets/vitest-seeklogo.svg'
import Tag from "../components/UI/Tag"
import Nestjs from '../assets/icon-nest.svg'
import typescript from '../assets/icons8-typescript.svg'
import nextFigma from '../assets/next-figma.svg'
import darkmodegitHub from '../assets/icons8-github.svg'
import darkModeExpress from '../assets/icons8-express-js (1).svg'
import { useContext } from "react"
import { ThemeContext } from "../useContext/context"

const ShillDisplay = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className="p-6">
        <Tag tagName="Skills"/>
        <div className="px-4 py-6">
        <Box display={{base:'grid',md:'flex'}} flexWrap={'wrap'} w={{xl:'1024px'}} gap={'15px'} className=" grid-cols-3 xl:mx-auto py-2"> 
            <Skills img={html} imgName={"HTML"}/>
            <Skills img={css} imgName={"CSS"}/>
            <Skills img={js} imgName={"Javascript"}/>
            <Skills img={typescript} imgName={"Typescript"}/>
            <Skills img={react} imgName={"React"}/>
            <Skills img={tailwind} imgName={"Tailwindcss"}/>
            <Skills img={bootstrap} imgName={"Bootstrap"}/>
            <Skills img={chakra} imgName={"Chakra UI"}/>
            <Skills img={git} imgName={"Git"}/>
            <Skills img={theme === "light" ? github : darkmodegitHub} imgName={"Github"}/>
            <Skills img={postman} imgName={"Postman"}/>
            <Skills img={theme === "light" ? nextjs : nextFigma} imgName={"Nextjs"}/>
            <Skills img={node} imgName={"Nodejs"}/>
            <Skills img={theme === "light" ? expressjs: darkModeExpress } imgName={"Expressjs"}/>
            <Skills img={Nestjs} imgName={"Nestjs"}/>
            <Skills img={mongo} imgName={"MongoDB"}/>
            <Skills img={jira} imgName={"Jira"}/>
            <Skills img={'https://cdn.brandfetch.io/iduDa181eM/theme/dark/logo.svg?k=bfHSJFAPEG'} imgName={"Linear"}/>
            <Skills img={vitest} imgName={"Vitest"}/>
            
        </Box>
        </div>
    </div>
  )
}

export default ShillDisplay