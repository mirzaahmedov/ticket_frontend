type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="uppercase h-16 text-white bg-blue-500 hover:bg-purple-600 rounded-md active:scale-95 transition">
      {children}
    </button>
  );
};

export default Button;
