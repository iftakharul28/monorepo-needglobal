import * as React from 'react';
import { Clsx } from '@iftakhar/ui';
type Props = {
  className?: string;
};
export const ArrowDown = (props: Props) => {
  return (
    <svg
      className={Clsx('h-4 w-4 transition-transform duration-200', props.className)}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <polyline points='6 9 12 15 18 9'></polyline>
    </svg>
  );
};
