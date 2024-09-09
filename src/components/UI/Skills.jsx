import { Box,Image } from "@chakra-ui/react"

const Skills = ({img}) => {
  return (
    <Box>
        <Image src={img} className=" size-12 md:size-32" objectFit={'contain'} />
    </Box>
  )
}

export default Skills