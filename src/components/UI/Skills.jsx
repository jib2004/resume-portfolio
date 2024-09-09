import { Box,Image } from "@chakra-ui/react"
import PropTypes from 'prop-types';

const Skills = ({img}) => {
  return (
    <Box>
        <Image src={img} alt={`image of ${img.slice(10)}`} className=" size-12 md:size-32" objectFit={'contain'} />
    </Box>
  )
}
Skills.propTypes={
  img:PropTypes.string
}


export default Skills