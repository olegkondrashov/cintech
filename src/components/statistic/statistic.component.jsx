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
    <section className="flex bg-gray-900 text-white py-16 h-[30vh]" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Computer gebaut</h2>
        
        <div className="text-5xl text-center">
          <CountUp
            start={0}
            end={startCount ? 10000 : 0}
            duration={2}
            suffix="+"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Websites entwickelt</h2>
        
        <div className="text-5xl text-center">
          <CountUp
            start={0}
            end={startCount ? 162 : 0}
            duration={2}
            suffix="+"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Windows installiert</h2>
        
        <div className="text-5xl text-center">
          <CountUp
            start={0}
            end={startCount ? 3400 : 0}
            duration={2}
            suffix="+"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Viren gelöscht</h2>
        
        <div className="text-5xl text-center">
          <CountUp
            start={0}
            end={startCount ? 99999 : 0}
            duration={2}
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
