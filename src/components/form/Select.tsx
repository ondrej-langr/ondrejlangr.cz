import { DetailedHTMLProps, FC, forwardRef } from 'react';
import clsx from 'clsx';
import { useFormState } from 'react-hook-form';
import { Check, Cross } from 'tabler-icons-react';
import { SelectHTMLAttributes } from 'react';
import { useTranslation } from 'next-i18next';

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: string;
  options: { label?: string; value: string }[];
}

export const Select: FC<SelectProps> = forwardRef(function Input(
  { placeholder, className, name, options, ...props },
  ref
) {
  const { errors, touchedFields } = useFormState();
  const { t } = useTranslation();

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
      <select
        ref={ref}
        className={clsx(
          className,
          'bg-transparent w-full bg-white px-3 pb-3 pt-7 text-lg text-gray-900 transition-all duration-100',
          'focus:outline-none dark:ring-transparent ring-project-green dark:focus:ring-sitePurple focus:ring-blue-300 ring-opacity-50 ring-4',
          error && 'text-red-600 '
        )}
        defaultValue="none"
        {...props}
      >
        <option value="none" disabled hidden>
          {t('Select an Option')}
        </option>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label ?? value}
          </option>
        ))}
      </select>
      {error && isTouched && <small className="text-red-600">{error}</small>}
    </div>
  );
});
