import { Box,Image,Link,Heading,Text } from "@chakra-ui/react"
import github from '../../assets/github-sign.png'
import { CiGlobe } from "react-icons/ci";
import PropTypes from 'prop-types';


const ProjectsDisplay = ({img,text,githubLink,liveLink,projectTitle,d}) => {
  return (
    <Box display={'flex'}  gap={'30px'} flexDirection={{base:'column',md:'row'}} className="my-5">
        <Box  className="">
            <Image src={img} alt="Project Image" w={{base:'310px',md:'395px'}} h={{base:'',md:'300px'}}  objectFit={'cover'} objectPosition={'left'}/>
        </Box>

        <Box  display={'flex'} flexDirection={'column'}  justifyContent={'space-between'} w={{md:'600px'}}>
            <Heading>{projectTitle}</Heading>
            <Text>{text}</Text>
            <Box display={'flex'} gap={'20px'} paddingTop={'10px'} paddingBottom={'10px'}>
            <Link href={githubLink}><Image src={github} className="size-8"/></Link>
            <Link href={liveLink} display={d}><CiGlobe className="size-8"/></Link>
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