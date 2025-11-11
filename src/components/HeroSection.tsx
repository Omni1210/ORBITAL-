import React from 'react';
import { Navigation } from './Navigation';
import { ProjectTitle } from './ProjectTitle';
import { EngageButton } from './EngageButton';
import { ProjectDescription } from './ProjectDescription';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const handleEngageClick = () => {
    // TODO: Implement engagement functionality
    console.log('User engaged with Project Mayari');
  };

  return (
    <main className={`flex w-full min-h-[900px] flex-col items-start relative max-md:min-h-screen ${className}`}>
      <section className="flex-[1_0_0] self-stretch relative min-h-[900px] w-full bg-white max-md:min-h-screen">
        {/* Background Image */}
        <div className="inline-flex h-[900px] flex-col justify-center items-center absolute w-[577px] right-0 top-0 max-md:w-2/5 max-md:right-0 max-sm:hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/85082786361b23a3e3dd92b6ec3e6f67c12903a4?width=1202"
            alt="Aerospace engineering background"
            className="w-[601px] h-[900px] shrink-0 aspect-[601/900] absolute -left-6 top-0 max-md:w-full max-md:h-auto max-md:relative max-md:left-0"
          />
        </div>

        {/* Navigation */}
        <header className="absolute right-[68px] top-[43px] max-md:right-5 max-md:top-5 max-sm:hidden">
          <Navigation />
        </header>

        {/* Main Title */}
        <ProjectTitle className="absolute left-[60px] top-[260px] max-md:left-5 max-md:top-[200px] max-sm:left-5 max-sm:top-[120px]" />

        {/* Engage Button */}
        <EngageButton 
          className="absolute left-[68px] top-[450px] max-md:left-5 max-md:top-[400px] max-sm:left-5 max-sm:top-[300px]"
          onClick={handleEngageClick}
        />

        {/* Description */}
        <ProjectDescription className="absolute left-[68px] top-[768px] max-md:left-5 max-md:top-auto max-md:bottom-10 max-sm:left-5 max-sm:top-auto max-sm:bottom-10" />

        {/* Logo Overlay */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/445a5ae24439179a68902f33dba85497fdbae44f?width=1872"
          alt="Mayari logo overlay"
          className="w-[936px] h-[936px] aspect-[1/1] absolute right-[-179px] top-[-3px] opacity-10 max-md:w-[600px] max-md:h-[600px] max-md:right-[-100px] max-sm:w-[400px] max-sm:h-[400px] max-sm:right-[-50px] max-sm:top-[50px] pointer-events-none"
          aria-hidden="true"
        />
      </section>
    </main>
  );
};
