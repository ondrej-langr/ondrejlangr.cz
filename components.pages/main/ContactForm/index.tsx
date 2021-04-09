import { Form, Formik, FormikBag, FormikProps } from "formik";
import { FC, ReactElement, useRef } from "react";
import { VerticalScroller } from "..";
import Field from "./Field";
import OptionField from "./OptionField";
import intialValues from "./_initialValues";
import validationSchema from "./_schema";
import { initVals } from "./_tsc";

const ContactForm: FC = (): ReactElement => {
  const formikRef = useRef<FormikProps<initVals>>(null);

  const onSubmitCallback = (
    values: initVals,
    actions: FormikBag<initVals, initVals>
  ) => {};

  return (
    <>
      <VerticalScroller
        title="Let's talk bussines"
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
                      <button
                        type="submit"
                        className="bg-indigo-700 py-4 px-5 mt-12 text-white mx-auto block"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-span-5">
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
