import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 text-white font-bold py-2 px-4 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
