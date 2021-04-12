import { FC, HTMLProps, ReactElement, useState } from "react";
import {
  Field as FormikField,
  FieldAttributes,
  useFormikContext,
} from "formik";
import { initVals } from "./_tsc";
import clsx from "clsx";

const OptionField: FC<
  FieldAttributes<any> & {
    placeholder: string;
    wrapProps?: HTMLProps<HTMLDivElement>;
  }
> = ({ placeholder, className, wrapProps, ...props }): ReactElement => {
  const { values, errors, touched } = useFormikContext<initVals>();

  const val = values[props.name];
  const error = errors[props.name];
  const isTouched = touched[props.name];
  const isValid = !error && isTouched;

  return (
    <div
      {...wrapProps}
      className={clsx(wrapProps?.className, "relative w-full")}
    >
      <label
        htmlFor={props.id}
        className={clsx(
          "font-normal transition-all duration-200 mb-4 block cursor-pointer hover:underline hover:text-white",
          val === props?.value ? "text-white underline" : "text-gray-500"
        )}
      >
        <FormikField
          id={props.id}
          className={clsx(
            className,
            "bg-white mr-4 rounded-full w-4 h-4",
            "focus:outline-none"
          )}
          type="radio"
          {...props}
        />
        {placeholder}
      </label>
    </div>
  );
};

export default OptionField;
