import { Box,Image } from "@chakra-ui/react"
import PropTypes from 'prop-types';
import { useContext } from "react"
import { ThemeContext } from "../../useContext/context"

const Skills = ({img,imgName}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <Box width={{md:"88px"}} height={{md:"100px"}} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Image src={img} alt={`image of ${img.slice(10)}`} className=" size-12 md:size-[64px]" objectFit={'contain'} />
        <figcaption className={` ${theme !== "light" && "text-[#D1D5DB]"} text-[0.8125rem] md:text-[1.125rem] leading-7`}>{imgName}</figcaption>
    </Box>
  )
}
Skills.propTypes={
  img:PropTypes.string,
  imgName:PropTypes.string
}


export default Skills