import { Box,Image,Link,Heading,Text } from "@chakra-ui/react"
import github from '../../assets/github-sign.png'
import { CiGlobe } from "react-icons/ci";
import PropTypes from 'prop-types';
import { ThemeContext } from "../../useContext/context";
import { useContext } from "react";

const ProjectsDisplay = ({img,text,githubLink,liveLink,projectTitle,d}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <Box display={'flex'}  backgroundColor={theme === "light" ? "#F9FAFB" : "#1F2937"} padding={'20px'} gap={'30px'} flexDirection={{base:'column',xl:'row'}} className="my-5 rounded-xl shadow-md">
        <Box flexBasis={'50%'}  className="">
            <Image src={img} alt="Project Image"  w={{base:'310px',md:'100%'}} h={{base:'',md:'300px'}}  objectFit={'cover'} objectPosition={'left'}/>
        </Box>
        <Box  flexBasis={'50%'} display={'flex'} flexDirection={'column'}  justifyContent={'space-between'} w={{md:'600px'}}>
            <Heading>{projectTitle}</Heading>
            <Text>{text}</Text>
            <Box display={'flex'} gap={'20px'} paddingTop={'10px'} paddingBottom={'10px'}>
            <Link target="_blank" href={githubLink}><Image src={github} className="size-8"/></Link>
            <Link target="_blank" href={liveLink} display={d}><CiGlobe className="size-8"/></Link>
            </Box>
        </Box>
    </Box>
  )
}
ProjectsDisplay.propTypes={
  img:PropTypes.string,
  text:PropTypes.string,
  githubLink:PropTypes.string,
  liveLink:PropTypes.string,
  projectTitle:PropTypes.string,
  d:PropTypes.string
}


export default ProjectsDisplay