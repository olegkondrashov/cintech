import Tilt from "react-parallax-tilt";
import pc from './pc-bg.png';
const Title = () => {
    return (
        <section className='flex flex-col-reverse sm:flex-row gap-4 p-4 mt-10 lg:mt-80'>
            <div className='sm:max-w-screen-md text-center sm:text-left	flex flex-col items-center sm:block'>
              <h1 className='text-4xl md:text-7xl'>Delivering Superior Services IT Solutions.</h1>
              <p className='mt-5'>treten Sie einfach mit uns in Kontakt.</p>
              <button className='bg-green-950 rounded-lg px-8 py-3 mt-5 max-w-xs'>Kontakt</button>
            </div>
            <Tilt
              className='w-42 sm:w-96'
              glareEnable={true}
              glareMaxOpacity={0.5}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={250}
              perspective={500}
            >
              <img src={pc} alt="PC" className="tilt-img" />
            </Tilt>
          </section>
    )
}

export default Title;