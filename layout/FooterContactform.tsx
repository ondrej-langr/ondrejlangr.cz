import { Field, Formik } from "formik";
import { Variants } from "framer-motion";
import { FC, ReactElement, useState } from "react";
import Button from "../components/Button";
import TitledSection from "../components/TitledSection";
import s from "./_styles"
const {ContactWrap,Err,FormRow,H1,Label,Wrap,SendRes, Form} = s

interface InitVals {
    name: string;
    email: string;
    text: string;
}

const errvars: Variants = {
  'in': {
    opacity: 1,
    height: 17
  },
  'out': {
    opacity: 0,
    height: 0
  }
}
  
const FooterContactForm: FC<{}> = (): ReactElement => {
    const initialValues: InitVals = { name: '', email: '', text: '' };
    const [sended, setSEnded] = useState(false);

    return (
      <TitledSection title={"Pojďme si napsat!"} movingTitle={"Kontakt"}  >
        <Wrap>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting,resetForm  }) => {
              fetch("/api/contactus", {method: "POST", body: JSON.stringify(values)})
                  .then(d=>d.json())
                  .then( (d) => {
                      console.log(d)
                      setSubmitting(false);
                      resetForm()
                      setSEnded(true)
                      setTimeout( () => { setSEnded(false) }, 5000 )
                  })
            }}    
            validate={values => {
              const errors: {[x:string]: any} = {};
              if(!values.name) {
                  errors.name = 'Vyžadováno';
              }

              if (!values.email) {
                  errors.email = 'Vyžadováno';
              } 
              else if (
                  !/^[0-9]{6,10}$/i.test(values.email) &&
                  /[@]/.test(values.email) === false
              ) {
                  errors.email = 'Toto není správný formát telefonu';
              }
              else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) 
              ) {
                  errors.email = 'Toto není správný formát emailu';
              }
              return errors;
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormRow id="form_anchor">
                  <Label htmlFor="firstName">Tvoje jméno</Label>
                  <Field id="name" name="name" placeholder="Tvoje jméno" required />
                  <Err name="name" component="div" variants={errvars} animate={"in"} exit="out" initial="out" />
                </FormRow>

                <FormRow>
                  <Label htmlFor="email">Tvůj email</Label>
                  <Field id="email" type="email" name="email" placeholder="Tvůj email" required />
                  <Err name="email" component="div" variants={errvars} animate={"in"} exit="out" initial="out" />
                </FormRow>

                <FormRow>
                  <Label htmlFor="text">Zpráva pro mě</Label>
                  <Field component="textarea" rows={8} id="text" type="text" name="text" required placeholder="Ahoj Ondro, potřeboval bych něco..." />
                  <Err name="text" component="div" variants={errvars} animate={"in"} exit="out" initial="out" />
                </FormRow>


                <FormRow css={{ marginTop: "3.5em" }} >
                  <Button type="submit" disabled={isSubmitting}>{isSubmitting ? <>Posílám...</> : <>Poslat zprávu</>}</Button>
                </FormRow>
                {sended&& <SendRes exit={{scale: .8, opacity: 0}} initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <p style={{ padding: "20px 30px", background: "green", color: "white", fontWeight: 600, fontSize: "1.5em" }}>
                      Odesláno! Co nejdříve Vás kontaktuju na uvedený mail.
                  </p>
                </SendRes>}
              </Form>
            )}
          </Formik>
          <ContactWrap>
            <address>
              <span css={{ color: "var(--color-base)"}}>Ondřej Langr</span><br />
              Lukavec u Hořic 13 <br />
              508 01 Hořice
            </address>
            <div css={{ 
              margin: "20px 0", 
              a: {
                color: "inherit",
                margin: 0,
                textDecoration: "none",
                borderBottom: 0
              },
              "span": {
                color: "var(--color-base)",
                "&:hover": {
                  textDecoration: "underline!important"
                },
              } 
            }}>
              <a href="tel:607445251">Tel.: <span>+420 607 445 251</span></a><br />
              <a href="mailto: hi@ondrejlangr.cz">Email : <span>hi@ondrejlangr.cz</span></a><br />
              <a href="https://www.linkedin.com/in/langr-ondrej/" target="_blank">Linkedin : <span>langr-ondrej</span></a><br />
            </div>
            <div>
              IČ: 09579443<br />
              DIČ: nejsem plátcem DPH
            </div>
          </ContactWrap>
        </Wrap>
      </TitledSection>
    );
};

export default FooterContactForm;