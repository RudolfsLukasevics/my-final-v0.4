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
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
        <article>
        <VscTools className='p-4 w-20 h-20 '/>
        <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;