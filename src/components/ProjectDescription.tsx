import React from 'react';

interface ProjectDescriptionProps {
  className?: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ className = '' }) => {
  return (
    <section 
      className={`flex w-[559px] h-[38px] justify-center items-center max-md:w-3/5 max-sm:w-[calc(100%_-_40px)] ${className}`}
      aria-label="Project description"
    >
      <p className="w-[559px] shrink-0 text-black text-base font-light tracking-[1.6px] uppercase h-[38px] max-md:w-full max-md:text-sm max-sm:text-xs max-sm:h-auto">
        UNOFFICIAL WEBSITE OF THE AEROSPACE ENGINEERING STUDENT SOCIETY -
        BATANGAS STATE UNIVERSITY
      </p>
    </section>
  );
};
