import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Statistics = () => {
  const [startCount, setStartCount] = useState(false);
  // useInView returns a ref and a boolean
  const { ref, inView } = useInView({
    triggerOnce: true,  // animate only once
    threshold: 0.3      // how much of the element must be in view
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <section id="statistics" className="flex flex-col md:flex-row  gap-5 lg:gap-10 bg-gray-900 text-white py-16 h-full md:h-[30vh]" ref={ref}>
      <div className="max-w-screen-xl  mx-auto px-4">
        <h2 className="text-xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">Computer gebaut</h2>
        
        <div className="text-xl lg:text-5xl text-center">
          <CountUp
            start={0}
            end={startCount ? 10000 : 0}
            duration={3}
            suffix="+"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">Websites entwickelt</h2>
        
        <div className="text-xl lg:text-5xl text-center">
          <CountUp
            start={0}
            end={startCount ? 162 : 0}
            duration={3}
            suffix="+"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">Windows installiert</h2>
        
        <div className="text-xl lg:text-5xl text-center">
          <CountUp
            start={0}
            end={startCount ? 15000 : 0}
            duration={3}
            suffix="+"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">Viren gelöscht</h2>
        
        <div className="text-xl lg:text-5xl text-center">
          <CountUp
            start={0}
            end={startCount ? 99999 : 0}
            duration={3}
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
