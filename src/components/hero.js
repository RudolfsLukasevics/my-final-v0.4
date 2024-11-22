import heroImg from '../assets/images/undraw_segment_analysis_re_ocsl.svg';
import { FaLinkedin} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Rudy</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Energy Consultant
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            making communities more independent
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://www.linkedin.com/in/rudolfs-lukasevics/'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' alt='image of a person looking over pie chart' />
        </article>
      </div>
    </div>
  );
};
export default Hero;