import VerticalScroller from "components.pages/main/VerticalScroller";
import Image from "components/Image";
import { FC, ReactElement } from "react";
import projectsList from "./projectsList";

const WorkSection: FC = (): ReactElement => {
  return (
    <VerticalScroller
      title="My work"
      description="In this section are a few of projects that I’ve been working on. You can check those out and see what you can get."
      id="work"
      elements={projectsList.map(
        (group: { title: string; url: string; imageUrl: string }[], index) => ({
          title: "",
          description: (
            <div className="grid grid-cols-6" key={index}>
              {group.map((project) => (
                <article className="col-span-3" key={project.title}>
                  <h1 className="text-gray-100 text-6xl mb-10 -mt-10">
                    {project.title}
                  </h1>
                  <a href={project.url} target="_blank" className="">
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
                  </a>
                </article>
              ))}
            </div>
          ),
        })
      )}
    />
  );
};

export default WorkSection;
