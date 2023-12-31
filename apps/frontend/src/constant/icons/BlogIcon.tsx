import { Clsx } from '@iftakhar/ui';
import * as React from 'react';
type Props = {
  className?: string;
};
const BlogIcon = (props: Props) => {
  return (
    <svg className={Clsx(props.className)} stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
      <g>
        <path fill='none' d='M0 0h24v24H0z'></path>
        <path d='M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z'></path>
      </g>
    </svg>
  );
};

export default BlogIcon;
