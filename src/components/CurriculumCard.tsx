import { useRef, useState } from 'preact/hooks';
import type { Class, Curriculum, Specialty } from '../data/types';

function isSpecialty(content: Specialty | Curriculum) {
  return !('semester1' in content);
}

interface Props {
  yearCodeName: string;
  content: Specialty | Curriculum;
  className?: string;
}

function CurriculumCard({ yearCodeName, content, className }: Props) {
  const carousel = useRef<HTMLDivElement>();
  const carouselSlide = useRef<HTMLDivElement>();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    isSpecialty(content) ? Object.keys(content)[0] : null
  );

  function slidePrev() {
    const slideWidth = carouselSlide.current.clientWidth;
    carousel.current.scrollLeft -= slideWidth + 20;
  }

  function slideNext() {
    const slideWidth = carouselSlide.current.clientWidth;
    carousel.current.scrollLeft += slideWidth + 20;
  }

  return (
    <section id={yearCodeName} class={`text-blue-dark ${className}`}>
      <div class="relative z-10 mx-auto max-w-[67.5rem] rounded-lg px-2 pb-14 pt-5 shadow-curriculum sm:px-16">
        <div className="absolute inset-0 rounded-lg bg-blue-dark opacity-60"></div>
        <h2 class="year-codename-underline relative z-10 mx-auto w-fit text-4xl font-bold text-beige">
          {yearCodeName}
        </h2>
        {isSpecialty(content) && (
          <div class="mt-4 flex justify-center gap-10">
            {Object.keys(content).map((specialty) => (
              <button
                onClick={() => setSelectedSpecialty(specialty)}
                class={`relative text-[2rem] font-bold text-beige ${
                  selectedSpecialty === specialty && 'specialty-underline'
                }`}>
                {specialty}
              </button>
            ))}
          </div>
        )}
        <div class="relative mt-9">
          <button
            onClick={slidePrev}
            class="absolute -bottom-11 left-1/3 sm:-left-10 sm:bottom-auto sm:top-64 lg:hidden">
            <img src="/images/chevron-left.svg" alt="chevron left icon" width="28" height="36" />
          </button>
          <div ref={carousel} class="flex gap-5 overflow-hidden scroll-smooth transition">
            <div ref={carouselSlide} class="w-full flex-[1_0_100%] lg:flex-auto">
              <h4 class="text-center text-2xl font-bold text-beige">semester 1</h4>
              <div class="mt-4 flex min-h-[30rem] flex-col gap-5 rounded-lg bg-beige px-3 py-6 sm:gap-3 sm:px-5">
                {isSpecialty(content)
                  ? content[selectedSpecialty].semester1.map((semesterClass: Class) => (
                      <a
                        href={semesterClass.link}
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center gap-2 text-lg leading-tight hover:underline">
                        <span class="flex-shrink-0">
                          <img
                            src="/images/document-icon.svg"
                            alt="text document icon"
                            width="35"
                            height="35"
                          />
                        </span>
                        <span>{semesterClass.title}</span>
                      </a>
                    ))
                  : (content as Curriculum).semester1.map((semesterClass: Class) => (
                      <a
                        href={semesterClass.link}
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center gap-2 text-lg leading-tight hover:underline">
                        <span class="flex-shrink-0">
                          <img
                            src="/images/document-icon.svg"
                            alt="text document icon"
                            width="35"
                          />
                        </span>
                        <span>{semesterClass.title}</span>
                      </a>
                    ))}
              </div>
            </div>
            <div class="carousel-slide w-full flex-[1_0_100%] lg:flex-auto">
              <h4 class="text-center text-2xl font-bold text-beige">semester 2</h4>
              <div class="mt-4 flex min-h-[30rem] flex-col gap-5 rounded-lg bg-beige px-3 py-6 sm:gap-3 sm:px-5">
                {isSpecialty(content)
                  ? content[selectedSpecialty].semester2.map((semesterClass: Class) => (
                      <a
                        href={semesterClass.link}
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center gap-2 text-lg leading-tight hover:underline">
                        <span class="flex-shrink-0">
                          <img
                            src="/images/document-icon.svg"
                            alt="text document icon"
                            width="35"
                          />
                        </span>
                        <span>{semesterClass.title}</span>
                      </a>
                    ))
                  : (content as Curriculum).semester2.map((semesterClass: Class) => (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={semesterClass.link}
                        class="flex items-center gap-2 text-lg leading-tight hover:underline">
                        <span class="flex-shrink-0">
                          <img
                            src="/images/document-icon.svg"
                            alt="text document icon"
                            width="35"
                          />
                        </span>
                        <span>{semesterClass.title}</span>
                      </a>
                    ))}
              </div>
            </div>
          </div>
          <button
            onClick={slideNext}
            class="absolute -bottom-11 right-1/3 z-10 sm:-right-10 sm:bottom-auto sm:top-64 lg:hidden">
            <img src="/images/chevron-right.svg" alt="" width="28" height="36" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CurriculumCard;
