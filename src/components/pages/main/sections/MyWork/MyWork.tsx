import Button from 'src/components/Button';
import Image from 'src/components/Image';
import TitledSection from 'src/components/TitledSection';
import { FC, ReactElement, useState } from 'react';
import projectsList from './projectsList';
import { useTranslations } from '@hooks';

export const MyWorkSection: FC = (): ReactElement => {
  const { t } = useTranslations();
  const [showMore, setShowMore] = useState(false);

  const onClickShowMore = () => setShowMore(!showMore);

  return (
    <TitledSection
      title="My work"
      description="Feel free to have a look on my work that is public and something may catch your eye."
      id="work"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
        {projectsList
          .slice(0, showMore ? projectsList.length : 3)
          .map((project) => (
            <article key={project.title}>
              <div className="w-full rounded-xl overflow-hidden h-[250px] relative rounded-br-none border-4 border-opacity-60 border-project-green  dark:border-0">
                <Image
                  alt=""
                  src={project.imageUrl}
                  layout="fill"
                  objectPosition="center"
                  objectFit="cover"
                  className="absolute w-full h-full"
                />
                <div className="flex flex-wrap justify-center lg:justify-start absolute bottom-5 left-5">
                  {project.tags.map((tag) => (
                    <div
                      className="text-sm uppercase bg-sitePurple rounded-2xl py-1 px-3.5 text-white mr-3 font-semibold "
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative bg-white rounded-xl z-10 p-5 py-8 border-4 border-project-green dark:border-0 border-opacity-60 mt-4 w-full rounded-tl-none ml-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  className="dark:text-project-accents dark:text-opacity-90 text-blue-300"
                >
                  <h1 className="text-3xl sm:text-4xl text-center lg:text-left">
                    {project.title}
                  </h1>
                </a>
              </div>
            </article>
          ))}
      </div>
      <div className="mt-20">
        <Button onClick={onClickShowMore}>
          {t(!showMore ? 'Show More' : 'Show less')}
        </Button>
      </div>
    </TitledSection>
  );
};
