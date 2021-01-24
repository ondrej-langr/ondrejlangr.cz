import styled from "@emotion/styled";
import { Field, Form, Formik } from "formik";
import { FC, ReactElement } from "react";
import Button from "../components/Button";
import TitledSection from "../components/TitledSection";

interface InitVals {
    name: string;
    email: string;
    text: string;
}

const H1 = styled.h1({
  fontSize: "3em",
  marginBottom: "-0.4em"
}),
FormRow = styled.div({
  display: "block",
  "input, textarea": {
    width: "100%",
    maxWidth: "650px",
    border: 0,
    background: "#f3f3f3",
    padding: "11px 15px",
    fontSize: "1em",
    fontWeight: 500
  }
}),
Label = styled.label({
  display: "block",
  marginTop: "40px",
  marginBottom: "5px",
  fontSize: "14px",
  fontWeight: 600,
  color: "var(--color-base)"
}),
Wrap = styled.div({
  display: "flex",
  "&>*": {
    flexBasis: "50%",
  },
  "@media screen and (max-width: 800px)": {
    flexFlow: "wrap-reverse",
    "&>*": {
      flexBasis: "100%",
    },
  }
}),
ContactWrap = styled.div({
  padding: "3.5em 0 2em 90px",
  "address": {
    fontSize: "1.5em",
    fontWeight: 700,
    lineHeight: "1.3em",
    fontStyle: "normal"
  },
  "@media screen and (max-width: 800px)": {
    paddingLeft: "0",
  }
})
  
const FooterContactForm: FC<{}> = (): ReactElement => {
    const initialValues: InitVals = { name: '', email: '', text: '' };
    return (
      <TitledSection title={"Kontakt"} >
        <H1>Kontaktujte mě</H1>
        <Wrap>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(" Formulář prozatím nefunguje, napiš mi normálně na mail ;)");
              actions.setSubmitting(false);
            }}
          >
            <Form>
              <Field id="huehue" name="huehue" type="hidden" />

              <FormRow>
                <Label htmlFor="firstName">Tvoje jméno</Label>
                <Field id="name" name="name" placeholder="Tvoje jméno" />
              </FormRow>

              <FormRow>
                <Label htmlFor="firstName">Tvůj email</Label>
                <Field id="email" type="email" name="email" placeholder="Tvůj email" />
              </FormRow>

              <FormRow>
                <Label htmlFor="firstName">Zpráva pro mě</Label>
                <Field component="textarea" rows={8} id="text" type="text" name="text" placeholder="Ahoj Ondro, potřeboval bych něco..." />
              </FormRow>

              <FormRow css={{ marginTop: "3.5em" }}>
                <Button type="submit">Odeslat</Button>
              </FormRow>
            </Form>
          </Formik>
          <ContactWrap>
            <address>
              Ondřej Langr<br />
              Lukavec u Hořic 13 <br />
              508 01 Hořice
            </address>
            <div css={{ margin: "20px 0", "span": {
              color: "var(--color-base)",
              "&:hover": {
                textDecoration: "underline!important"
              }
            } }}>
              <a href="tel:607445251">Tel.: <span>+420 607 445 251</span></a><br />
              <a href="mailto: langr.ondrej.work@gmail.com">Email : <span>langr.ondrej.work@gmail.com</span></a><br />
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