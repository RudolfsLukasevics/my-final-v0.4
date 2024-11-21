import SectionTitle from './sectionTitle';

const About = () => {
  return (
    <section className='bg-primary py-20' id='about'>
        <SectionTitle text='Education and Professional Experiences' />
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        
        <article>
          
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