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
          "font-normal transition-all duration-200 mb-4 block text-gray-500"
        )}
      >
        <FormikField
          id={props.id}
          className={clsx(
            className,
            "bg-white mr-4 rounded-full",
            "ring-4",
            "focus:outline-none focus:ring-blue-700",
            isValid ? "ring-green-600" : "ring-transparent"
          )}
          onFocus={fHandl}
          onBlur={fHandl}
          type="radio"
          {...props}
        />
        {placeholder}
      </label>
    </div>
  );
};

export default OptionField;
