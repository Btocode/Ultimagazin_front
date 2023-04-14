const Button = ({ className, children, type, bgColor, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` ${width} ${className} py-2 px-6 my-4 text-light hover:bg-opacity-90 rounded transition-all duration-300 ${
        bgColor ? bgColor : "bg-primary"
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
