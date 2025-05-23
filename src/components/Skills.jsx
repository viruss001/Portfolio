// components/Skills.jsx

import React from 'react';
import SpotlightCard from './Animations/SpotlightCard';
import FadeInSection from '../FadeInSection';
import GradientText from './Animations/GradientText '

const Skills = () => {
  const skills = [
    { name: 'Python', color: 'rgba(55, 118, 171, 0.3)' },
    { name: 'JavaScript', color: 'rgba(247, 223, 30, 0.3)' },
    { name: 'Django', color: 'rgba(247, 223, 30, 0.3)' },
    { name: 'React', color: 'rgba(97, 218, 251, 0.3)' },
    { name: 'Tailwind', color: 'rgba(55, 118, 171, 0.3)' },
    { name: 'CSS3', color: 'rgba(21, 114, 182, 0.3)' },
    { name: 'HTML5', color: 'rgba(227, 79, 38, 0.3)' },
    { name: 'DRF', color: 'rgba(227, 79, 38, 0.3)' },
  ];

  return (
    <div className="bg-gradient-to-br from-base-200 to-base-300 py-8 skills mt-8" id='skill'>
      <h2 className="text-3xl font-bold text-black mb-5 text-center">My Skills</h2>
      <div className="grid gap-4  max-w-6xl mx-auto grid-container gap-4 px-4 max-w-6xl mx-auto grid-container" >
        {skills.map((skill, index) => (
          <FadeInSection key={index} delay={index * 100}>
            <div className="aspect-square h-32 w-[100%] sm:w-full grid-item  hover:shadow-md transition-shadow">
              <SpotlightCard
                className="w-full h-full"
                spotlightColor={"#2323FF"}
                spotlightSize={300}
                borderRadius={20}
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[16px]  " >
                  {/* <img
                    src={skill.bgImage}
                    alt={`Background for ${skill.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  /> */}
                  <div className="absolute inset-0 bg-black/10 "></div>
                </div>
                <div className="relative z-10 h-full  text-white flex items-center justify-center p-4">
                  <h3 className="text-2xl font-bold  text-center">{skill.name}</h3>
                </div>
              </SpotlightCard>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Skills;
