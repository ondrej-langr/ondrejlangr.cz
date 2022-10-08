import clsx from 'clsx';
import { cloneElement, FC, ReactElement, ReactNode } from 'react';

export const ContactRow: FC<{
  icon: ReactElement<any>;
  children: ReactNode;
}> = ({ icon, children }) => {
  return (
    <div className="flex items-center">
      {cloneElement(icon, {
        className: clsx('flex-none mr-5', icon.props.className),
        size: icon.props.size ?? 20,
      })}{' '}
      {children}
    </div>
  );
};
