import React, { useState, useEffect } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3.5); // default

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3.5); // for desktop
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // for tablet
      } else {
        setCardsToShow(1); // for mobile
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const totalSlides = Math.ceil(projectsData.length - cardsToShow + 1);

  const nextProject = () => {
    setSlideIndex((prevIndex) =>
      prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setSlideIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(projectsData.length / cardsToShow) * 100}%`,
            transform: `translateX(-${(slideIndex * 100) / projectsData.length}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative px-2"
              style={{
                flex: `0 0 ${100 / projectsData.length}%`,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14 rounded-lg shadow-lg object-cover"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} — {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
