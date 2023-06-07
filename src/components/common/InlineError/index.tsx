interface InlineErrorProps {
  message: string;
}

const InlineError = (props: InlineErrorProps) => {
  const { message } = props;
  return <p className="block mt-2 text-red-800">{message}</p>;
};

export default InlineError;
