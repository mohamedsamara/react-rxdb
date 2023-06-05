interface IconProps {
  w?: number | string;
  h?: number | string;
  color?: string;
}

export const ArrowLeftIcon = (props: IconProps) => {
  const { w = 16, h = 16, color = '#373737' } = props;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 8L1 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15L0.999999 8L8 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseIcon = (props: IconProps) => {
  const { w = 16, h = 16, color = '#373737' } = props;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 1L1 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1L17 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
