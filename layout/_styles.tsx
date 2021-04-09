import {ErrorMessage, ErrorMessageProps, Form as FormikForm} from "formik"
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactElement,FC, HTMLProps, LabelHTMLAttributes, FormHTMLAttributes } from "react";
 
const CustEr = motion.custom(ErrorMessage);


export const Err: FC<HTMLMotionProps<"small"> & ErrorMessageProps> = ({children, ...rest}): ReactElement => 
  <CustEr className="text-red-600 z-10 ml-7 text-sm" {...rest}>{children}</CustEr>

export const H1: FC<HTMLProps<HTMLHeadingElement>> = ({children, ...rest}): ReactElement => 
  <h1 className="text-5xl -mb-2" {...rest}>{children}</h1>

export const FormRow: FC<HTMLProps<HTMLDivElement>> = ({children, ...rest}): ReactElement => 
  <div className="block" {...rest}>{children}</div>

export const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({children, ...rest}): ReactElement => 
  <label className="block mt-10 mb-1 text-sm font-semibold" {...rest}>{children}</label>

export const Wrap: FC<HTMLProps<HTMLDivElement>> = ({children, ...rest}): ReactElement => 
  <div className="block" {...rest}>{children}</div>

export const ContactWrap: FC<HTMLProps<HTMLDivElement>> = ({children, ...rest}): ReactElement => 
  <div className="block" {...rest}>{children}</div>

export const SendRes: FC<HTMLMotionProps<"div">> = ({children, ...rest}): ReactElement => 
  <motion.div className="block" {...rest}>{children}</motion.div>

export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({children, ...rest}): ReactElement => 
  <FormikForm className="block" {...rest}>{children}</FormikForm>