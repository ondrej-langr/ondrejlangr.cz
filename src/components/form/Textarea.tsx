import {
  DetailedHTMLProps,
  FC,
  forwardRef,
  TextareaHTMLAttributes,
} from 'react';
import clsx from 'clsx';
import { useFormContext, useFormState } from 'react-hook-form';
import { Check, Cross } from 'tabler-icons-react';

export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
}

export const Textarea: FC<TextareaProps> = forwardRef(function Textarea(
  { placeholder, className, name, ...props },
  ref
) {
  const { errors, touchedFields } = useFormState();

  const error = errors?.[name]?.message;
  const isTouched = touchedFields?.[name];

  return (
    <div className={'relative w-full'}>
      <label
        htmlFor={props.id}
        className={clsx(
          'm-0 absolute font-normal transition-all duration-200 text-sm left-3 top-2 text-gray-400'
        )}
      >
        {placeholder} {props.required && '*'}{' '}
        {isTouched && error && <Cross size={10} />}{' '}
        {isTouched && !error && <Check size={10} />}
      </label>
      <textarea
        ref={ref}
        className={clsx(
          className,
          'bg-transparent w-full bg-white px-3 pb-3 pt-7 text-lg text-gray-900 transition-all duration-100',
          'focus:outline-none dark:ring-transparent ring-project-green dark:focus:ring-sitePurple focus:ring-blue-300 ring-opacity-50 ring-4',
          error && 'text-red-600 '
        )}
        {...props}
      />
      {error && <small className="text-red-600">{error}</small>}
    </div>
  );
});
