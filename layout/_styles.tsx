import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {ErrorMessage, Form} from "formik"
 
export default {
    Err: styled(motion.custom(ErrorMessage))({
        color: "red",
        zIndex: 1,
        marginLeft: '27px',
        fontSize: "14px"
    }),
    H1: styled.h1({
      fontSize: "3em",
      marginBottom: "-0.4em"
    }),
    FormRow: styled.div({
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
    Label: styled.label({
      display: "block",
      marginTop: "40px",
      marginBottom: "5px",
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--color-base)"
    }),
    Wrap: styled.div({
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
    ContactWrap: styled.div({
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
    }),
    SendRes: styled(motion.div)({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }),
    Form: styled(Form)({
        position: "relative"
    })
}