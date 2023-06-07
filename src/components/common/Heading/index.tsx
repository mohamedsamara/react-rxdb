import classnames from 'classnames';
import { HeadingType, HeadingTypes } from 'styles/theme';

export interface HeadingProps {
  children: string;
  as: HeadingTypes;
  className?: string;
}

const Heading = (props: HeadingProps) => {
  const { children, className = '', as = 'h4', ...rest } = props;
  const Element = as;

  return (
    <Element className={classnames(HeadingType[as], className)} {...rest}>
      {children}
    </Element>
  );
};

export default Heading;
