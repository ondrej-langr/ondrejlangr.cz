import { FC, ReactElement } from "react";
import VerticalScroller from "../VerticalScroller";

const OptionsSection: FC = (): ReactElement => {
  return (
    <VerticalScroller
      title="My options"
      description="This section is here to show you how big my field of view is and what are my usual tools to solve problems for my clients."
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

export default OptionsSection;
