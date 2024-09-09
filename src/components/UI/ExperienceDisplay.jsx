import { Box,Heading,Text,UnorderedList,ListItem } from "@chakra-ui/react"

const ExperienceDisplay = ({jobTitle,companyname,startDate,endDate,jobDecription,jobDecription1}) => {
  return (
    <div className="md:px-[10px ]">
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading size={{base:'', md:"2xl"}}>{jobTitle}</Heading>
        <Text>{`${startDate} - ${endDate}`}</Text>
        </Box>
        <Heading size={{base:'', md:"2xl"}}>{companyname}</Heading>

        <UnorderedList>
          <ListItem>{jobDecription}</ListItem>
          <ListItem>{jobDecription1}</ListItem>
          
        </UnorderedList>

    </div>
  )
}

export default ExperienceDisplay