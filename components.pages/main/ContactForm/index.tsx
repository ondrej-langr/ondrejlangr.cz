import clsx from "clsx";
import { Form, Formik, FormikBag, FormikProps } from "formik";
import useSiteStore from "layout/store";
import { FC, ReactElement, useRef, useState } from "react";
import { VerticalScroller } from "..";
import Field from "./Field";
import OptionField from "./OptionField";
import intialValues from "./_initialValues";
import validationSchema from "./_schema";
import { initVals } from "./_tsc";

const ContactForm: FC = (): ReactElement => {
  const formikRef = useRef<FormikProps<initVals>>(null);
  const setLoading = useSiteStore((state) => state.setLoading);
  const [showDone, setShowDone] = useState(false);

  const onSubmitCallback = async (
    values: initVals,
    actions: FormikBag<initVals, initVals>
  ) => {
    setLoading(true);
    const res = await fetch("/api/contactus", {
      method: "POST",
      body: JSON.stringify(values),
    });
    setShowDone(true);
    setTimeout(() => {
      setShowDone(false), actions.resetForm();
    }, 15000);
    setLoading(false);
  };

  return (
    <>
      <VerticalScroller
        title="Let's talk bussines"
        id="contact"
        elements={[
          {
            title: "",
            description: (
              <Formik
                initialValues={intialValues as initVals}
                onSubmit={onSubmitCallback}
                innerRef={formikRef}
                validationSchema={validationSchema}
              >
                <Form className="mb-20">
                  <div className="grid grid-cols-12 mb-12 space-x-10">
                    <div className="col-span-7">
                      <Field
                        name="fullname"
                        id="fullname"
                        placeholder="Full name"
                      />
                      <Field
                        name="email"
                        id="email"
                        placeholder="Email"
                        wrapProps={{
                          className: "mt-12",
                        }}
                      />
                      <Field
                        name="telephone"
                        id="telephone"
                        placeholder="Telephone number"
                        wrapProps={{
                          className: "mt-12",
                        }}
                      />
                      <Field
                        name="message"
                        id="message"
                        placeholder="Message"
                        component="textarea"
                        rows="10"
                        wrapProps={{
                          className: "mt-12",
                        }}
                      />
                      {showDone && (
                        <p className={"text-green-700 text-2xl my-10"}>
                          Thank you for your message! I'll get to you right away
                          as soon as it will be possible :)
                        </p>
                      )}
                      <button
                        type="submit"
                        className={clsx(
                          "bg-indigo-700 py-4 px-5 mt-12 text-white mx-auto block",
                          formikRef.current?.isSubmitting &&
                            "pointer-events-none opacity-60"
                        )}
                        disabled={formikRef.current?.isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-span-5 pl-7">
                      <p className="m-0 text-white text-2xl">Expected Budget</p>
                      <div role="group" className="mt-4 mb-10">
                        <OptionField
                          type="radio"
                          name="budget"
                          value="$1k-$2k"
                          placeholder="$1k-$2k"
                        />
                        <OptionField
                          type="radio"
                          name="budget"
                          value="$5k-$10k"
                          placeholder="$5k-$10k"
                        />
                        <OptionField
                          type="radio"
                          name="budget"
                          value="$75k-$100k"
                          placeholder="$75k-$100k"
                        />
                        <OptionField
                          type="radio"
                          name="budget"
                          value="$150k-$300k"
                          placeholder="$150k-$300k"
                        />
                        <OptionField
                          type="radio"
                          name="budget"
                          value="$300k+"
                          placeholder="$300k+"
                        />
                        <OptionField
                          type="radio"
                          name="budget"
                          value="Not sure"
                          placeholder="Not sure"
                        />
                      </div>
                      <p className="m-0 text-white text-2xl">
                        Field of expretise
                      </p>
                      <div role="group" className="mt-4 mb-10">
                        <OptionField
                          type="radio"
                          name="tech"
                          value="tech"
                          placeholder="Tech"
                        />
                        <OptionField
                          type="radio"
                          name="tech"
                          value="finance"
                          placeholder="Finance"
                        />
                        <OptionField
                          type="radio"
                          name="tech"
                          value="Not sure"
                          placeholder="Not sure"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            ),
          },
        ]}
      />
    </>
  );
};

export default ContactForm;
