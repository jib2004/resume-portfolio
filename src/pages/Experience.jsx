import { Text,Box } from "@chakra-ui/react"
import ExperienceDisplay from "../components/UI/ExperienceDisplay"
import Tag from "../components/UI/Tag"
import { useContext } from "react"
import { ThemeContext } from "../useContext/context"

const Experience = () => {
  const {theme} = useContext(ThemeContext)
  return (
    
        <div id="experience" className={` xl:min-h-screen p-6 ${theme === "light" ? "bg-[#F9FAFB]" : "bg-[#111827]"}`}>
          <Tag tagName="Experience"/>
          <Text textAlign={'center'} padding={'10px'}>Here is a quick summary of my most recent experiences:</Text>
        <Box>
            <ExperienceDisplay jobTitle={'Frontend Developer Intern'} startDate={'August 2024'} endDate={'October 2024'} companyname={'InternPulse'} jobDecription={' Designed and implemented a user authentication system, ensuring data security and compliance with industry standards.'} jobDecription1={'Collaborated with senior developers and UI/UX designers to troubleshoot technical issues and improve code efficiency.'} jobDecription2={'Effective communication with the team to ensure clear goal understanding, fostering collaboration, and building trust.'}  jobDecription3={'Led the frontend team, overseeing project delivery and managing pull requests to ensure timely and high-quality outcomes. Adapted quickly to leadership challenges, driving team efficiency and collaboration to meet deadlines.'} d4={'none'} />
            <ExperienceDisplay jobTitle={'Frontend Developer'} startDate="June 2024" endDate="August 2024" companyname="Freelance" jobDecription={' Built custom websites and landing pages for small businesses, exceeding client expectations and achieving a 100% success rate in meeting project deadlines'} jobDecription1={' Utilized SEO best practices to optimize website content.'} jobDecription2={' Provided ongoing technical support and maintenance for clients, ensuring website functionality and security.'}  d3={'none'} d4={'none'}/>
        </Box>

        
        </div>
    
  )
}

export default Experience