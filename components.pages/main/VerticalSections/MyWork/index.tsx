import Button from "components/Button";
import Image from "components/Image";
import TitledSection from "components/TitledSection";
import { FC, ReactElement, useState } from "react";
import projectsList from "./projectsList";

const WorkSection: FC = (): ReactElement => {
  const [showMore, setShowMore] = useState(false);

  const onClickShowMore = () => setShowMore(!showMore);

  return (
    <TitledSection
      title="My work"
      description="In this section are a few of projects that I’ve been working on. You can check those out and see what you can get."
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
            <article className="col-span-3 md:flex mt-16">
              <div className="flex-none text-center md:text-left">
                <Image
                  src={project.imageUrl}
                  width={450}
                  height={250}
                  objectPosition={"center"}
                  objectFit={"cover"}
                  className={
                    "hover:scale-110 transition-transform duration-300 transform inline-block leading-none "
                  }
                />
              </div>
              <div className="md:pl-10 text-center">
                <h1 className="text-gray-100 text-6xl mt-10 md:mt-0 mb-5 md:mb-10">
                  {project.title}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start">
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
          {!showMore ? "Show More" : "Show less"}
        </Button>
      </div>
    </TitledSection>
  );
};

export default WorkSection;
