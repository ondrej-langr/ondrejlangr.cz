import clsx from 'clsx';
import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from 'react';

export interface OptionProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type'
  > {
  name: string;
  placeholder: string;
}

export const Option: FC<OptionProps> = forwardRef(function Option(
  { id, className, placeholder, ...props },
  ref
) {
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={clsx(
          'font-normal transition-all duration-200 mb-4 block cursor-pointer hover:underline hover:text-white'
        )}
      >
        <input
          ref={ref}
          type="radio"
          id={id}
          className={clsx(
            className,
            'bg-white mr-4 rounded-full w-4 h-4',
            'focus:outline-none'
          )}
          {...props}
        />
        {placeholder}
      </label>
    </div>
  );
});
