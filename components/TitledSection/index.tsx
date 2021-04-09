import { FC, ReactElement } from "react";

const TitledSection: FC<{ title: string, movingTitle?: string }> = ({ title, children, movingTitle, ...rest }): ReactElement => {
     
    return <>
        <section className="relative mt-32 flex flex-wrap" {...rest}>
            <div className="w-full">
                <h1 className="text-5xl text-black mb-2 mt-1">
                    {title}
                </h1>
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </section>
    </>
}

export default TitledSection;