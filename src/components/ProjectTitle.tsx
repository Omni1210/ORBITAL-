import React from 'react';

interface ProjectTitleProps {
  className?: string;
}

export const ProjectTitle: React.FC<ProjectTitleProps> = ({ className = '' }) => {
  return (
    <section className={`w-[863px] h-[166px] max-md:w-3/5 max-sm:w-[calc(100%_-_40px)] ${className}`} aria-labelledby="project-title">
      <h1
        id="project-title"
        className="w-[863px] h-[125px] shrink-0 text-8xl font-normal tracking-[2.88px] uppercase bg-clip-text max-md:text-[64px] max-md:w-full max-sm:text-4xl max-sm:h-auto text-black"
      >
        PROJECT MAYARI
      </h1>
      <p className="w-[795px] h-[61px] shrink-0 text-[#722B01] text-2xl font-normal uppercase mt-2 max-md:text-lg max-md:w-full max-sm:text-sm max-sm:h-auto">
        ASCENDING MINDS IN THE LIGHT OF EVERY INSIGHT
      </p>
    </section>
  );
};
