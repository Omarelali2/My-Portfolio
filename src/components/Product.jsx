import React from "react"
import education from "../assets/education.jpg"
import samsung from "../assets/samsung.jpg"
import forever from "../assets/forever.jpg"
const project = [
  {
    name: "Samsung Clone",
    description: "Full-stack Samsung store (attention: not official and is opened in desktop mode only)",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "TailwindCSS",
      "React Router",
    ],
    image: samsung,
    live: "https://sumsung-store-frontend-i3ov.vercel.app/",
    github: "https://github.com/Omarelali2/sumsung-store-backend",
  },
  {
    name: "university education",
    description: "A simple education website",
    stack: ["React", "CSS"],
    image: education,
    live: "https://education-rho-six.vercel.app/",
    github: "https://github.com/Omarelali2/education",
  },
  {
    name: "Clothing store",
    description: "A simple clothing store",
    stack: ["React", "CSS", "TailwindCSS", "React Router"],
    image: forever,
    live: "https://buy-products-six.vercel.app/",
    github: "https://github.com/Omarelali2/Buy_products",
  },
]
const projects = () => {
  return (
    <div>
      <div id='projects' className=' px-6 py-10  text-white mt-5'>
        <div className='flex '>
          <h1 className='text-2xl font-bold w-full md:w-40 mb-10 text-black'>
            # My Projects{" "}
          </h1>{" "}
          <hr className='border-t-2 mt-5 ml-5 border-black w-34 mb-2' />
        </div>
        <div className='flex flex-col w-[100%] md:justify-between md:flex-row md:flex-wrap gap-6'>
          {project.map((projecte, index) => (
            <div
              data-aos='flip-right'
              key={index}
              className='bg-white w-full border border-black rounded-xl overflow-hidden shadow-none flex flex-col  md:w-[30%]'
            >
              <img
                src={projecte.image}
                alt={projecte.name}
                className='w-full h-[250px] object-cover'
              />

              <div className='mb-6'>
                {/* Tech Stack */}
                <div className='mb-5'>
                  <ul className='flex flex-wrap list-none gap-x-4 gap-y-2 text-gray-400 p-2 border-b border-gray-400 text-lg'>
                    {projecte.stack.map((tech, i) => (
                      <li key={i} className='flex items-center gap-1'>
                        <span className='text-red-500 font-bold'>#</span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='p-4'>
                  <h2 className='text-2xl text-black font-bold'>
                    {projecte.name}
                  </h2>

                  {/* Description */}
                  <p className='text-lg text-gray-400 my-4 mx-0'>
                    {projecte.description}
                  </p>
                </div>
                {/* Project Title */}

                <div className='flex flex-wrap gap-2 ml-3'>
                  <a
                    className='border py-2 px-4 text-black text-lg border-red-400 inline-block w-fit font-bold hover:text-red-400'
                    href={projecte.live}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live =&gt;
                  </a>
                  <a
                    className='border py-2 px-4 text-black text-lg border-red-400 inline-block w-fit font-bold hover:text-red-400'
                    href={projecte.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github =&gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default projects
