import React from 'react';
import SpotlightCard from './Animations/SpotlightCard';
import GradientText from './Animations/GradientText ';
import FadeInSection from '../FadeInSection';

function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      technologies: ['Html', 'Django', 'Bootstrap'],
      link:"https://github.com/viruss001/ecomm",
      img:"./Data/bruno-kelzer-LvySG1hvuzI-unsplash.jpg"
    },
    {
      title: 'Food Ordring Application UI',
      description: 'A simple UI of Food Ordring App',
      technologies: ['React ',"Context-API", ],
      link:"https://github.com/viruss001/whatappminiProject",
      img:"./Data/food.jpg"
    },
    {
      title: 'Note App ',
      description: 'A simple Note application',
      technologies: ['React', 'Django', 'Bootstrap'],
      link:"https://github.com/viruss001/mynote",
      img:"./Data/notes.webp"
    },
    {
      title: 'Hotel Website',
      description: 'A simple Hotel searching application',
      technologies: ['HTML',  'Bootstrap','Django',],
      link:"https://github.com/viruss001/Hotel",
      img:"./Data/hotel.jpg"
    },
    {
      title: 'AI Agent',
      description: 'A simple Ai Agent for understanding concept of AI Agent',
      technologies: ['Python',  'Grok','API',],
      link:"https://github.com/viruss001/Hotel",
      img:"./Data/ai new.png"
    },


  ];

  return (
    <div className=" bg-gradient-to-br from-base-200 to-base-300  Projects" id='Projects'> 
      <h2 className="text-3xl font-bold text-black mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 grid-container  sm:p-6">
        {projects.map((project, index) => (
          <FadeInSection key={index} delay={index * 100}>

          <article key={index} className="overflow-hidden rounded-lg border w-[90%] grid-item  border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <img
              alt={project.title}
              src={project.img}
              className="project-image"
              />
            <SpotlightCard
             className="w-full h-full  text-gray-200"
             spotlightColor={"#2323FF"}
             spotlightSize={200}
             borderRadius={20}
             >

            
            <div className="p-4 sm:p-6 ">
              <h3 className="text-lg font-medium text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm/relaxed text-gray-200">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 text-xs rounded-full">
                    <GradientText
  colors={["white", "#4079ff", "pink", "#4079ff", "#40ffaa"]}
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
>
  {tech}
</GradientText>
                    
                  </span>
                ))}
              </div>
              <a href={project.link} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-white">
                
                View project
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </a>
            </div>
            </SpotlightCard>
          </article>
                </FadeInSection>
        ))}
      </div>
    </div>
  );
}

export default Projects;