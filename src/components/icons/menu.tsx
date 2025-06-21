export const Menu = (props: React.SVGProps<SVGSVGElement>) => {
  const { className, ...rest } = props;
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12h16"></path>
      <path d="M4 18h16"></path>
      <path d="M4 6h16"></path>
    </svg>
  );
};
