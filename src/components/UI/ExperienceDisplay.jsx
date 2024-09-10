import { Box,Heading,Text,UnorderedList,ListItem } from "@chakra-ui/react"
import PropTypes from 'prop-types';

const ExperienceDisplay = ({jobTitle,companyname,startDate,endDate,jobDecription,jobDecription1,jobDecription2,jobDecription3,jobDecription4,d2,d3,d4}) => {
  return (
    <div className="px-1 md:px-[10px] my-6">
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading size={{base:'', md:"2xl"}}>{jobTitle}</Heading>
        <Text>{`${startDate} - ${endDate}`}</Text>
        </Box>
        <Heading size={{base:'', md:"2xl"}}>{companyname}</Heading>
        <UnorderedList className="w-[90vw] md:mx-0 md:w-auto">
          <ListItem marginTop={'5px'}>{jobDecription}</ListItem>
          <ListItem marginTop={'5px'}>{jobDecription1}</ListItem>
          <ListItem marginTop={'5px'} display={d2}>{jobDecription2}</ListItem>
          <ListItem marginTop={'5px'} display={d3}>{jobDecription3}</ListItem>
          <ListItem marginTop={'5px'} display={d4}>{jobDecription4}</ListItem>
        </UnorderedList>
    </div>
  )
}
ExperienceDisplay.propTypes = {
  jobTitle:PropTypes.string.isRequired,
  companyname:PropTypes.string.isRequired,
  startDate:PropTypes.string.isRequired,
  endDate:PropTypes.string.isRequired,
  jobDecription:PropTypes.string,
  jobDecription1:PropTypes.string,
  jobDecription2:PropTypes.string,
  jobDecription3:PropTypes.string,
  jobDecription4:PropTypes.string,
  d2:PropTypes.string,
  d3:PropTypes.string,
  d4:PropTypes.string

}

export default ExperienceDisplay