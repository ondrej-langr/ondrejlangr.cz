import Image from "components/Image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import designImage from "../../../public/design.png";
import financeImage from "../../../public/finance.png";
import technologiesImage from "../../../public/technologies.png";
import VerticalScroller from "../VerticalScroller";

const OptionsSection: FC = (): ReactElement => {
  return (
    <VerticalScroller
      title="My options"
      description="This section is here to show you how big my field of view is and what are my usual tools to solve problems for my clients."
      id="options"
      elements={[
        {
          title: "Web development",
          description: (
            <div className="grid grid-cols-12">
              <p className="col-span-8 pr-4">
                I can provide wide range of services. If it has to do something
                with web, then Im all in! I specialize in JavaScript - not only
                on Frontend, but on Backend too. My go to solution for project
                is: React/NextJS/Express/Postgres/Tailwind.
                <br />
                <br />I use other technologies too! Such as PHP, Python, Svelte,
                MySQL, NoSQL or plain CSS is not new to me and can start working
                with it rightaway. Everything else is not a problem too!
              </p>
              <div className="col-span-4 text-right">
                <Image
                  src={technologiesImage}
                  width={240}
                  height={290}
                  className={"w-full h-auto"}
                />
              </div>
            </div>
          ),
        },
        {
          title: "Design",
          description: (
            <div className="grid grid-cols-12">
              <p className="col-span-8 pr-4">
                I also provide for my clients UI/UX design solutions. I'm in
                contact with proffesionals in design field to provide my clients
                maximum out of every project. For smaller on budget solutions I
                do design by myself to fit clients needs.
                <br />
                <br />
                You can check out{" "}
                <a href="http://www.maneken.cz/">Martin's portfolio</a> to give
                you an exaple what type of design you may get.
              </p>
              <div className="col-span-4 text-right">
                <Image
                  src={designImage}
                  width={240}
                  height={290}
                  className={"w-full h-auto"}
                />
              </div>
            </div>
          ),
        },
        {
          title: "Finance",
          description: (
            <div className="grid grid-cols-12">
              <p className="col-span-8 pr-4">
                Do you have an ambicious idea or project and having problem with
                financing your dreams? No problem! I want to help my clients as
                much as possible and for that I cooperate with people from
                finance bussines. People which will gide you through your
                finance planning has +20 years of exprience in finance
                bussiness.
                <br />
                <br />
                Options are limitless. For more info you can{" "}
                <Link href="/#contact">
                  <a>Contact me</a>
                </Link>{" "}
                or straigh up contact{" "}
                <a href="https://larokinvest.cz">Larokinvest</a>/
                <a href="https://saluspopuli.sk">Salus Populi Group</a>
              </p>
              <div className="col-span-4 text-right">
                <Image
                  src={financeImage}
                  width={140}
                  height={328}
                  className={"w-full h-auto"}
                />
              </div>
            </div>
          ),
        },
      ]}
    />
  );
};

export default OptionsSection;
