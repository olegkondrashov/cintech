import img1 from './windows.png';
import img2 from './acer.png';
import img3 from './amd.png';
import img4 from './asus.png';
import img5 from './crucial.png';
import img6 from './gigabyte.png';
import img7 from './intel.png';
import img8 from './nvidia.png';
import img9 from './sophos.png';
import img10 from './samsung.png';





const Partners = () => {
    const logos = [
        { src: img1, alt: 'Windows Logo', href: '/' },
        { src: img2, alt: 'Acer Logo', href: '/' },
        { src: img3, alt: 'AMD Logo', href: '/' },
        { src: img4, alt: 'Asus Logo', href: '/' },
        { src: img5, alt: 'Crucial Logo', href: '/' },
        { src: img6, alt: 'Gigabyte Logo', href: '/' },
        { src: img7, alt: 'Intel Logo', href: '/' },
        { src: img8, alt: 'Nvidia Logo', href: '/' },
        { src: img9, alt: 'Sophos Logo', href: '/' },
        { src: img10, alt: 'Samsung Logo', href: '/' },

      ];

      const logosExtended = [...logos, ...logos];

      return (
        <section className="w-full h-full overflow-hidden bg-gray-50 flex items-center flex-col">
          <h2 className="text-center text-4xl font-bold uppercase mb-4">Partner</h2>
          <div className="w-full  overflow-hidden">
            {/* Der Container mit der Animation */}
            <div className="flex animate-animateScroll md:animate-animateScrollMd gap-20 h-full">
              {logosExtended.map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-[200px] min-w-[200px] object-scale-down"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Partners;