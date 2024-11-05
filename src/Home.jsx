import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js';
import img from './assets/image/main_image.png'
import CV from './assets/Hamza_Tariq_CV.pdf'

function Home() {
    const elementRef = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        typedInstance.current = new Typed(elementRef.current, {
            strings: ['Web Developer', 'Programmer', 'Front-End Developer', 'Coder'],
            typeSpeed: 50,
            backSpeed: 150,
            loop: true,
        });

        return () => {
            typedInstance.current.destroy();
        };
    }, []);
    return (
        <>
        <div className='mx-11' id='home-section'>
            <div className='w-full flex flex-col md:flex-row justify-between'>
                {/* text Section */}
                <div className='w-10/12 mt-20 font-bold'>
                    <h1 className='my-2 text-2xl'>Hi,</h1>
                    <h1 className='my-4 text-2xl'>I am <span className='bg-orange-400 p-1 border-2 border-orange-500 rounded-lg'>Ameer Hamza</span></h1>
                    <span className="text-yellow-900 text-3xl" ref={elementRef}></span>
                    <p className='my-2 w-[125%] md:w-[95%] text-justify font-semibold'>A front-end developer with a strong passion for creating responsive and visually engaging web applications. I specialize in HTML, CSS, Tailwind CSS, Bootstrap, and Sass to bring clean and modern designs to life. I’m skilled in JavaScript and TypeScript for building dynamic, interactive interfaces, and I work with React and Material UI to make seamless, efficient user experiences. I’m always learning and exploring new tools and libraries to stay updated and improve my skills in building efficient, high-quality applications.</p>
                    <div className='flex gap-5 my-5 text-4xl cursor-pointer'>
                    <a href="https://github.com/ameerhamzaa47" target='_blank'><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ameer-hamza-9a93a82b6/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                    <a className=' text-xl border-2 bg-orange-600 p-3 rounded-3xl text-white hover:bg-orange-500 relative bottom-1' download={CV} href={CV}>My CV</a>
                    </div>
                </div>
                {/* Image Section */}
                <img className='w-96 md:w-[50%] md:mt-20 md:h-96 object-cover' src={img} alt="" />
            </div>
        </div>
        </>
    )
}

export default Home;
