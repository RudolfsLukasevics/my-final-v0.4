import SectionTitle from './sectionTitle';
import { IoSchoolOutline } from "react-icons/io5";
import { TbTools } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";


const About = () => {
  return (
    <section className='bg-primary py-20' id='about'>
        <SectionTitle text='Education and Professional Experiences' />
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <article>
        <IoSchoolOutline  className='p-4 w-20 h-20 '/>
          <li className=' pl-4 mt-8 leading-loose'>
            College of the Atlantic, Bar Harbor, USA
            
          </li>
          <li className='pl-4 mt-8 leading-loose'>
          UWC Robert Bosch College, Freiburg, Germany
          </li>
          <li className='pl-4 mt-8 leading-loose'>
            Spogi High School, Spogi, Latvia
            
          </li>
        </article>
        <article>
        <VscTools className='p-4 w-20 h-20 '/>
        <li className=' pl-4 mt-8 leading-loose'>
          Community Energy Center, Bar Harbor, USA
            
          </li>
          <li className='pl-4 mt-8 leading-loose'>
          Maine Up Program, Bar Harbor, USA
          </li>
          <li className='pl-4 mt-8 leading-loose'>
          Energy Fellow, Bar Harbor, USA
            
          </li>
        </article>
        
      </div>
    </section>
    
   
  );
};
export default About;