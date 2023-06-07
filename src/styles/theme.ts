/* Button Component */
export type ButtonVariants = 'primary' | 'secondary' | 'basic' | 'danger';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export const ButtonVariant = {
  primary:
    'bg-blue-500 hover:bg-blue-700 text-white font-normal rounded disabled:opacity-25 inline-flex items-center justify-center',
  secondary:
    'bg-slate-100 hover:bg-slate-200 text-slate-700 font-normal rounded disabled:opacity-25 inline-flex items-center justify-center',
  basic:
    'bg-gray-100 hover:bg-gray-200 text-gray-700 font-normal rounded disabled:opacity-25 inline-flex items-center justify-center',
  danger:
    'bg-red-300 hover:bg-red-500 text-white font-normal rounded disabled:opacity-25 inline-flex items-center justify-center',
};

export const ButtonSize = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg',
};

/* Button Component */

/* Heading Component */
export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const HeadingType = {
  h1: 'text-5xl font-extrabold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-bold',
  h6: 'text-lg font-bold',
};
/* Heading Component */

/* Spinner Component */
export type SpinnerVariants = 'primary' | 'secondary' | 'basic';
export type SpinnerSizes = 'sm' | 'md' | 'lg';

export const SpinnerVariant = {
  primary: 'text-gray-200 animate-spin fill-blue-600',
  secondary: 'text-gray-200 animate-spin fill-slate-400',
  basic: 'text-gray-200 animate-spin fill-gray-400',
};

export const SpinnerSize = {
  sm: 'w-4 h-4 text-xs',
  md: 'w-6 h-6 text-base',
  lg: 'w-8 h-8 text-lg',
};
/* Spinner Component */
