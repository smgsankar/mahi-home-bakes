export const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => {
  const { className, ...rest } = props;

  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6"></path>
    </svg>
  );
};
