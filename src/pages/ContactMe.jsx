import { useContext,useState } from 'react'
import { ThemeContext } from '../useContext/context'
import Tag from '../components/UI/Tag'
import { Text,useToast } from '@chakra-ui/react'
import emailImg from '../assets/email3.svg'
import copyImg from '../assets/copy.svg'
import phoneIcon from '../assets/phoneIcon.svg'
import darkModecopyImg from '../assets/darkmodeCopy.svg'
import darkModeEmailImg from '../assets/darkmodeEmail.svg'
import darkModePhoneImg from '../assets/darkmodePhone.svg'


const ContactMe = () => {
    const { theme } = useContext(ThemeContext)
    const toast = useToast()
    const [copied, setCopied] = useState(false);
    const handleCopy = (text) =>{
        if(copied === !true){
    navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        toast({
            title: 'Copied Text',
            status:'success',
            duration: 2000,
            isClosable: true,
        })
        setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy text:", err));
    }
    }
  return (
    <section className={`${theme === "light" ? 'bg-[#F9FAFB]':"bg-[#111827]"} h-[472px] md:h-[560px] grid place-content-center`}>
        <div className='flex flex-col gap-6'>

            <div className='flex flex-col gap-3'>
        <Tag tagName='Get in touch'/>
        <Text size={{base:'18px',md:'20px'}} width={{md:'576px'}} textAlign={'center'}>
        What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </Text>
        </div>

        <div>
            <ul className='flex flex-col gap-2 items-center'>
                <li className='flex items-center gap-1 md:gap-5'><figure><img src={theme === 'light' ? emailImg : darkModeEmailImg} alt="Email" /></figure> <figcaption className={`text-[18px] md:text-[36px] leading-[28px] md:leading-10 tracking-[-2%] font-semibold ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>obasaajibola04@gmail.com</figcaption> <figure onClick={()=>handleCopy('obaseajibola04@gmail.com')} className='cursor-pointer' title='copy'><img src={theme === 'light' ? copyImg : darkModecopyImg} alt="Copy" /></figure></li>
                <li className='flex items-center gap-1 md:gap-5'><figure><img src={theme === 'light' ? phoneIcon : darkModePhoneImg} alt="Phone Number" /></figure> <figcaption className={`text-[18px] md:text-[36px] leading-[28px] md:leading-10 tracking-[-2%] font-semibold ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>+234 7061770898</figcaption> <figure onClick={()=>handleCopy('+2347061770898')} className=' cursor-pointer'><img src={theme === 'light' ? copyImg : darkModecopyImg} alt="Copy" /></figure></li>
                
            </ul>
        </div>

        </div>
    </section>
  )
}

export default ContactMe