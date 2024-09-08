
import App from '../App'
import ProjectsDisplay from '../components/UI/ProjectsDisplay'
import crypto from '../assets/Screenshot 2024-09-08 171444.png'
import agrivista from '../assets/Screenshot 2024-09-08 203650.png'
import timbu from '../assets/Screenshot 2024-09-08 205105.png'
import hms from '../assets/Screenshot 2024-09-08 210050.png'

const Projects = () => {
  return (
    <App>
      <div className='w-[90vw] mx-auto mt-8'>
        <ProjectsDisplay img={crypto} projectTitle={'CryptoTracker'} text={'Stay up-to-date with the latest cryptocurrency trends and prices. Our user-friendly platform, built with React and Tailwind CSS, leverages the CoinGecko API to provide real-time data on thousands of cryptocurrencies. Easily track your favorite coins, explore market insights, and make informed investment decisions.'} liveLink={'https://crypto-tracker-seven-psi.vercel.app/'} githubLink={'https://github.com/jib2004/CryptoTracker'} />
        <ProjectsDisplay img={agrivista} projectTitle={'Agrivista farms'} text={'Discover the future of farming with Agrivista Farms. Our innovative platform, built with Next.js, and Tailwind CSS, offers a seamless experience for farmers, agribusinesses, and consumers. Explore the latest agricultural technologies, connect with experts, and find sustainable solutions to thrive in todays evolving agricultural landscape.'} githubLink={'https://github.com/jib2004/Agrivista'} liveLink={'https://agrivista-rho.vercel.app/'}/> 
        <ProjectsDisplay img={timbu} text={'Tiumbu is a sleek and user-friendly online marketplace built with cutting-edge technologies like Next.js and Tailwind CSS. Designed in collaboration with a skilled UI/UX designer, the platform offers a seamless shopping experience with intuitive navigation and a visually appealing interface.Discover a curated collection of high-quality products across various categories.'} projectTitle={'Timbu'} liveLink={'https://hng-task-two-alpha.vercel.app/'} githubLink={'https://github.com/jib2004/hngTaskTwo'}/>
        <ProjectsDisplay img={hms} text={'Introducing a comprehensive hostel management system designed to optimize your daily tasks and enhance overall efficiency. Built using cutting-edge technologies like React, TailwindCSS, Redux Toolkit, React Router Dom, Express.js, MongoDB, JWT, Bcrypt, and Mongoose, our system offers a user-friendly interface and powerful features to streamline your operations.'} projectTitle={'Hostel Management System'} d={'none'} githubLink={'https://github.com/jib2004/Hostel-Management-System'}/>
      </div>
    </App>
  )
}

export default Projects