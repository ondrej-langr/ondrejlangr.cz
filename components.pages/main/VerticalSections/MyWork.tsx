import { FC, ReactElement } from "react";
import VerticalScroller from "../VerticalScroller";

const WorkSection: FC = (): ReactElement => {
  return (
    <VerticalScroller
      title="My work"
      description="In this section are a few of projects that I’ve been working on. You can check those out and see what you can get as my future client."
      elements={[
        {
          title: "Web development",
          description: (
            <div className="grid grid-cols-12">
              <p className="col-span-9 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu neque augue. Aenean dolor turpis, eleifend et pulvinar
                aliquam, viverra hendrerit mi. Maecenas convallis velit non est
                <br />
                <br />
                quis pulvinar. Nam tortor neque, dignissim nec pharetra at,
                volutpat pretium ligula. Suspendisse imperdiet nibh a sodales
                aliquet.
              </p>
            </div>
          ),
        },
        {
          title: "Design",
          description: (
            <div className="grid grid-cols-12">
              <p className="col-span-9 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu neque augue. Aenean dolor turpis, eleifend et pulvinar
                aliquam, viverra hendrerit mi. Maecenas convallis velit non est
                <br />
                <br />
                quis pulvinar. Nam tortor neque, dignissim nec pharetra at,
                volutpat pretium ligula. Suspendisse imperdiet nibh a sodales
                aliquet.
              </p>
            </div>
          ),
        },
      ]}
    />
  );
};

export default WorkSection;
