import { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';
import {
  ButtonVariant,
  ButtonSize,
  ButtonVariants,
  ButtonSizes,
} from 'styles/theme';
import Spinner from '../Spinner';

export interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    disabled = false,
    loading = false,
    children,
    variant = 'basic',
    size = 'md',
    className,
    onClick,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        ButtonVariant[variant],
        ButtonSize[size],
        className,
      )}
      onClick={onClick}
    >
      {loading && <Spinner size="sm" className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
