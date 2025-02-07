import img1 from './microsoft.png';
import img2 from './acer.png';
import img3 from './dell.png';
import img4 from './lenovo.png';
import img5 from './synaxon.svg';
import img6 from './intel.png';
import img7 from './sophos.png';
import img8 from './samsung.png';





const Partners = () => {
    const logos = [
        { src: img1, alt: 'Microsoft Logo'},
        { src: img2, alt: 'Acer Logo'},
        { src: img3, alt: 'Dell Logo'},
        { src: img4, alt: 'Lenovo Logo'},
        { src: img5, alt: 'Synaxon Logo' },
        { src: img6, alt: 'Intel Logo' },
        { src: img7, alt: 'Sophos Logo' },
        { src: img8, alt: 'Samsung Logo' },

      ];

      const logosExtended = [...logos, ...logos];

      return (
        <section className="w-full h-full overflow-hidden bg-gray-50 flex items-center flex-col">
          <h2 className="text-center text-4xl font-bold uppercase mb-4">Partner</h2>
          <div className="w-full  overflow-hidden">
            {/* Der Container mit der Animation */}
            <div className="flex animate-animateScroll md:animate-animateScrollMd gap-20 h-full">
              {logosExtended.map((logo, index) => (
                  <img
                    key={index}
                    className="h-[200px] min-w-[200px] object-scale-down"
                    src={logo.src}
                    alt={logo.alt}
                  />
              ))}
            </div>
          </div>
        </section>
      );
}

export default Partners;