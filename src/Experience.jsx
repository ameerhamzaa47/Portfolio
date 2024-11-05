import React from 'react'

function Experience() {
    return (
        <>

            <h1 id='experience-section' className='font-bold text-4xl text-orange-700 mt-20 mx-10'>Experience</h1>

            {/* Experience 1 */}

            <div className="flex flex-col md:flex-row space-x-4 py-6">
                <div className="text-right pr-4 border-r-8 border-dotted border-gray-300 w-1/2 md:w-1/3">
                    <h3 className="font-bold text-orange-500">Brackets Gujranwala</h3>
                    <p className="text-sm text-gray-500">Oct 2024 - Present</p>
                </div>

                <div className='w-11/12 md:w-7/12 text-justify'>
                    <h4 className="text-base md:text-xl font-bold mt-4 md:mt-0"><mark>Frontend Developer INTERN</mark></h4>
                    <p className="mt-2 text-gray-700">
                        As a Frontend Developer Intern at Brackets, I focus on building responsive and user-friendly web interfaces that enhance user engagement and accessibility. Since starting in October 2024, I have worked closely with the development team to implement modern frontend technologies, optimize performance, and maintain clean, scalable code. My responsibilities include translating design mockups into functional components, collaborating on code reviews, and contributing to a seamless user experience. This role has sharpened my skills in JavaScript, React, and CSS frameworks, while also giving me hands-on experience with version control and agile development methodologies.
                    </p>
                    <strong>Skills:</strong> JavaScript ES6+ · Tailwind CSS · TypeScript · React.js · State Management (React Context API) · Redux.js
                </div>
            </div>


            {/* Experience 2 */}

            <div className="flex flex-col md:flex-row space-x-4 py-6">
                <div className="text-right pr-4 border-r-8 border-dotted border-gray-300 w-1/2 md:w-1/3">
                    <h3 className="font-bold text-orange-500">Tecno Sphere Gujranwala</h3>
                    <p className="text-sm text-gray-500">Aug 2023 - July 2024</p>
                </div>

                <div className='w-11/12 md:w-7/12 text-justify'>
                    <h4 className="text-base md:text-xl font-bold mt-4 md:mt-0"><mark>Front-End Developer</mark></h4>
                    <p className="mt-2 text-gray-700">
                    Dedicated and skilled Front-End Developer, Hamza Tariq, blending a passion for clean, responsive design with a mastery of HTML, CSS, Bootstrap, JavaScript and React JS. With a certificate from Tecno Sphere Software House, I bring a solid foundation in web development and a commitment to delivering visually stunning and user-friendly interfaces. Continuously evolving to stay abreast of emerging technologies, I am poised to drive innovation and exceed expectations in the ever-evolving landscape of front-end development.
                    </p>
                    <strong>Skills:</strong> HTML · Cascading Style Sheets (CSS) · JavaScript · React.js · Bootstrap (Framework) · Material-UI · Redux.js
                </div>
            </div>


             {/* Experience 3 */}

             <div className="flex flex-col md:flex-row space-x-4 py-6">
                <div className="text-right pr-4 border-r-8 border-dotted border-gray-300 w-1/2 md:w-1/3">
                    <h3 className="font-bold text-orange-500">Envision Profit</h3>
                    <p className="text-sm text-gray-500">Jan 2023 - July 2023</p>
                </div>

                <div className='w-11/12 md:w-7/12 text-justify'>
                    <h4 className="text-base md:text-xl font-bold mt-4 md:mt-0"><mark>Frontend Developer</mark></h4>
                    <p className="mt-2 text-gray-700">
                    Utilized HTML5, CSS3, and JavaScript to build and maintain responsive, user-friendly web applications, ensuring compatibility across various devices and browsers.

                    Leveraged React JS and Material UI to create dynamic, high-performance user interfaces, enhancing user experience with intuitive and interactive elements.
                    </p>
                    <strong>Skills:</strong> Front-End Development · HTML · Cascading Style Sheets (CSS) · JavaScript · React.js · Material UI
                </div>
            </div>
        </>
    )
}

export default Experience
