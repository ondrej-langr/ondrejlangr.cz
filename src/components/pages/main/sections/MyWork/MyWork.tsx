import Button from 'src/components/Button';
import Image from 'src/components/Image';
import TitledSection from 'src/components/TitledSection';
import { FC, ReactElement, useState } from 'react';
import projectsList from './projectsList';

const WorkSection: FC = (): ReactElement => {
  const [showMore, setShowMore] = useState(false);

  const onClickShowMore = () => setShowMore(!showMore);

  return (
    <TitledSection
      title="My work"
      description="Please have a look on my work that is public and some may catch your eye."
      id="work"
    >
      {projectsList
        .slice(0, showMore ? projectsList.length : 3)
        .map((project) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            key={project.title}
          >
            <article className="col-span-3 lg:flex mt-20">
              <div className="flex-none text-center lg:text-left">
                <Image
                  src={project.imageUrl}
                  width={450}
                  height={250}
                  objectPosition={'center'}
                  objectFit={'cover'}
                  className={
                    'hover:scale-110 transition-transform duration-300 transform inline-block leading-none rounded-lg'
                  }
                />
              </div>
              <div className="lg:pl-10 pt-0">
                <h1 className="text-gray-100 text-4xl sm:text-6xl mt-10 md:mt-0 mb-5 lg:mb-10 text-center lg:text-left">
                  {project.title}
                </h1>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {project.tags.map((tag) => (
                    <div
                      className="text-sm uppercase bg-sitePurple rounded-2xl py-1 px-3.5 text-white mr-3 font-semibold"
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </a>
        ))}
      <div className="text-center mt-20">
        <Button onClick={onClickShowMore}>
          {!showMore ? 'Show More' : 'Show less'}
        </Button>
      </div>
    </TitledSection>
  );
};
