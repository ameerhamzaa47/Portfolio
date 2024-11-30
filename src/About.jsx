import React from 'react'
import img1 from './assets/image/Student_CRUD.png'
import img2 from './assets/image/Students.png'
import img3 from './assets/image/Landing_Page.png'
import img4 from './assets/image/Photo_Gallary.png'
import img5 from './assets/image/E-Commerce_Store.png'
import img6 from './assets/image/User_Dashboard.png'
import img7 from './assets/image/To_Do_List.png'

function About() {
  return (
    <div id='about-section' className='text-center mt-10'>
      <h1 className='font-bold text-4xl text-orange-700'>Few Projects</h1>


{/* Project 1 */}


      <div className=' flex flex-col md:flex-row justify-between mx-11'>
        <div className='w-7/12 mt-5 md:mt-32 font-bold'>
        {/* project text */}
            <h1 className='my-2 text-2xl text-left text-orange-500'>E-Commerce Store</h1>
            <p className='my-2 w-[160%] md:w-[95%] text-justify font-thin'>Welcome to our online store, where you can find a wide range of high-quality products at unbeatable prices. Browse through our user-friendly platform and enjoy a seamless shopping experience with secure payment options and fast delivery. Shop with confidence and discover amazing deals today!</p>
            <div className='flex gap-5 my-5'>
                {/* Project Button */}
            <a href="https://e-commerce-store-zeta-teal.vercel.app/" target='_blank'><button className='bg-orange-600 p-3 rounded-lg text-white hover:bg-orange-500 relative bottom-0.5'>Demo</button></a>
            <a href="https://github.com/ameerhamzaa47/E-commerce-Store" target='_blank'><button className='border-2 border-black  p-2 rounded-lg hover:bg-black hover:text-white'><i className="fa-brands fa-github"></i> Code</button></a>
            </div>
        </div>
        {/* project image */}
        <div className='w-80 md:w-[50%]'>
        <img className='w-full p-4 md:mt-20 md:h-80 object-cover border-2 border-gray rounded-lg' src={img5} alt="" />
        </div>
      </div>
      
{/* Project 2 */}


      <div className=' flex flex-col md:flex-row justify-between mx-11'>
        <div className='w-7/12 mt-5 md:mt-32 font-bold'>
        {/* project text */}
            <h1 className='my-2 text-2xl text-left text-orange-500'>Student-CRUD-Project</h1>
            <p className='my-2 w-[160%] md:w-[95%] text-justify font-thin'>The Student CRUD Project is a web application that allows users to manage student data effortlessly. Users can create, read, update, and delete student records through an intuitive interface built with React. This project showcases my skills in full-stack development and my ability to create functional applications that streamline data management.</p>
            <div className='flex gap-5 my-5'>
                {/* Project Button */}
            <a href="https://student-crud-project-smoky.vercel.app/" target='_blank'><button className='bg-orange-600 p-3 rounded-lg text-white hover:bg-orange-500 relative bottom-0.5'>Demo</button></a>
            <a href="https://github.com/ameerhamzaa47/Student-CRUD-Project" target='_blank'><button className='border-2 border-black  p-2 rounded-lg hover:bg-black hover:text-white'><i className="fa-brands fa-github"></i> Code</button></a>
            </div>
        </div>
        {/* project image */}
        <div className='w-80 md:w-[50%]'>
        <img className='w-full p-4 md:mt-20 md:h-80 object-cover border-2 border-gray rounded-lg' src={img1} alt="" />
        </div>
      </div>


{/* Project 3 */}


<div className=' flex flex-col md:flex-row justify-between mx-11'>
        <div className='w-7/12 mt-5 md:mt-32 font-bold'>
        {/* project text */}
            <h1 className='my-2 text-2xl text-left text-orange-500'>User-Manegment-Dashboard</h1>
            <p className='my-2 w-[160%] md:w-[95%] text-justify font-thin'>Our User Management Dashboard offers an intuitive interface to easily manage and organize user accounts. With features like role assignment, user activity tracking, and data analytics, it streamlines the process of overseeing and maintaining your user base. Effortlessly monitor and manage user access and permissions in one centralized platform.</p>
            <div className='flex gap-5 my-5'>
                {/* Project Button */}
            <a href="https://user-manegment-dashboard.vercel.app/" target='_blank'><button className='bg-orange-600 p-3 rounded-lg text-white hover:bg-orange-500 relative bottom-0.5'>Demo</button></a>
            <a href="https://github.com/ameerhamzaa47/User-Manegment-Dashboard" target='_blank'><button className='border-2 border-black  p-2 rounded-lg hover:bg-black hover:text-white'><i className="fa-brands fa-github"></i> Code</button></a>
            </div>
        </div>
        {/* project image */}
        <div className='w-80 md:w-[50%]'>
        <img className='w-full p-4 md:mt-20 md:h-80 object-cover border-2 border-gray rounded-lg' src={img6} alt="" />
        </div>
      </div>


{/* Project 4 */}


<div className=' flex flex-col md:flex-row justify-between mx-11'>
        <div className='w-7/12 mt-5 md:mt-32 font-bold'>
        {/* project text */}
            <h1 className='my-2 text-2xl text-left text-orange-500'>To-Do-APP</h1>
            <p className='my-2 w-[160%] md:w-[95%] text-justify font-thin'>Our To-Do App helps you stay organized and boost productivity by allowing you to easily create, manage, and prioritize tasks. With a clean, user-friendly interface, you can track your to-dos, set deadlines, and check off completed tasks seamlessly. Stay on top of your goals and never miss a task again!</p>
            <div className='flex gap-5 my-5'>
                {/* Project Button */}
            <a href="https://to-do-app-iota-blue.vercel.app/" target='_blank'><button className='bg-orange-600 p-3 rounded-lg text-white hover:bg-orange-500 relative bottom-0.5'>Demo</button></a>
            <a href="https://github.com/ameerhamzaa47/To-Do-APP" target='_blank'><button className='border-2 border-black  p-2 rounded-lg hover:bg-black hover:text-white'><i className="fa-brands fa-github"></i> Code</button></a>
            </div>
        </div>
        {/* project image */}
        <div className='w-80 md:w-[50%]'>
        <img className='w-full p-4 md:mt-20 md:h-80 object-cover border-2 border-gray rounded-lg' src={img7} alt="" />
        </div>
      </div>


{/* Project 5 */}


      <div className=' flex flex-col md:flex-row justify-between mx-11'>
        <div className='w-7/12 mt-5 md:mt-32 font-bold'>
        {/* project text */}
            <h1 className='my-2 text-2xl text-left text-orange-500'>Student Project</h1>
            <p className='my-2 w-[160%] md:w-[95%] text-justify font-thin'>The Student Project is a dynamic application designed to enhance the learning experience by providing tools for students to track their progress and manage assignments. It emphasizes user-friendly navigation and interactive features, showcasing my ability to create engaging educational solutions.</p>
            <div className='flex gap-5 my-5'>
                {/* Project Button */}
            <a href="https://student-nine-cyan.vercel.app/" target='_blank'><button className='bg-orange-600 p-3 rounded-lg text-white hover:bg-orange-500 relative bottom-0.5'>Demo</button></a>
            <a href="https://github.com/ameerhamzaa47/Student" target='_blank'><button className='border-2 border-black  p-2 rounded-lg hover:bg-black hover:text-white'><i className="fa-brands fa-github"></i> Code</button></a>
            </div>
        </div>
        {/* project image */}
        <div className='w-80 md:w-[50%]'>
        <img className='w-full p-4 md:mt-20 md:h-80 object-cover border-2 border-gray rounded-lg' src={img2} alt="" />
        </div>
      </div>

{/* Project 6 */}


<div className=' flex flex-col md:flex-row justify-between mx-11'>
        <div className='w-7/12 mt-5 md:mt-32 font-bold'>
        {/* project text */}
            <h1 className='my-2 text-2xl text-left text-orange-500'>Responsive Photo Gallary</h1>
            <p className='my-2 w-[160%] md:w-[95%] text-justify font-thin'>The Responsive Photo Gallery dynamically adapts to any screen size, offering a visually appealing and interactive way to view photos. Built with HTML, CSS, and JavaScript, it ensures smooth transitions and a seamless layout, providing users with a rich and accessible browsing experience across devices.</p>
            <div className='flex gap-5 my-5'>
                {/* Project Button */}
            <a href="https://internship-brackets-x8cl.vercel.app/" target='_blank'><button className='bg-orange-600 p-3 rounded-lg text-white hover:bg-orange-500 relative bottom-0.5'>Demo</button></a>
            <a href="https://github.com/ameerhamzaa47/Internship-brackets/tree/main/Week%203/W3%20Day3%2C4%2C5/Grid_Photo_Gallary/src" target='_blank'><button className='border-2 border-black  p-2 rounded-lg hover:bg-black hover:text-white'><i className="fa-brands fa-github"></i> Code</button></a>
            </div>
        </div>
        {/* project image */}
        <div className='w-80 md:w-[50%]'>
        <img className='w-full p-8 md:mt-20 md:h-80 object-cover border-2 border-gray rounded-lg' src={img4} alt="" />
        </div>
      </div>

      
    </div>
  )
}

export default About
