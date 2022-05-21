import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Option } from './Option';

export interface Options {
  items: { value: string; label?: string }[];
  name: string;
}

export const Options: FC<Options> = ({ items, name }) => {
  const { register } = useFormContext();

  return (
    <div role="group" className="mt-4 mb-10">
      {items.map(({ value, label }) => (
        <Option
          key={value}
          value={value}
          placeholder={label ?? value}
          {...register(name)}
        />
      ))}
    </div>
  );
};
