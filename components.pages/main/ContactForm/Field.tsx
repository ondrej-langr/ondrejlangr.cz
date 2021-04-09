import { FC, HTMLProps, ReactElement, useState } from "react";
import {
  Field as FormikField,
  FieldAttributes,
  useFormikContext,
} from "formik";
import { initVals } from "./_tsc";
import clsx from "clsx";

const Field: FC<
  FieldAttributes<any> & {
    placeholder: string;
    wrapProps?: HTMLProps<HTMLDivElement>;
  }
> = ({ placeholder, className, wrapProps, ...props }): ReactElement => {
  const [f, setF] = useState<boolean>();
  const { values, errors, touched } = useFormikContext<initVals>();

  const val = values[props.name];
  const error = errors[props.name];
  const isTouched = touched[props.name];
  const isValid = !error && isTouched;

  const fHandl = (e: FocusEvent) => {
    setF(e.type === "focus");
  };

  return (
    <div
      {...wrapProps}
      className={clsx(wrapProps?.className, "relative w-full")}
    >
      <label
        htmlFor={props.id}
        className={clsx(
          "m-0 absolute font-normal transition-all duration-200 text-gray-500",
          f || (val && val.length > 0)
            ? "text-sm left-3 top-2 text-gray-400"
            : "text-3xl top-4 left-3"
        )}
      >
        {placeholder} {props.required && "*"}
      </label>
      <FormikField
        id={props.id}
        className={clsx(
          className,
          "bg-transparent w-full bg-white px-3 pb-3 pt-7 text-lg text-gray-900 transition-all duration-100",
          "ring-4",
          "focus:outline-none focus:ring-blue-700",
          isValid ? "ring-green-600" : "ring-transparent"
        )}
        onFocus={fHandl}
        onBlur={fHandl}
        {...props}
      />
    </div>
  );
};

export default Field;
