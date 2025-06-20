import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles =
    "px-4 py-1.5 rounded font-medium transition duration-200 focus:outline-none ";

  if (variant === "primary") {
    styles += "bg-[#3C65F5] text-white";
  } else if (variant === "secondary") {
    styles += "bg-white bg-[#3C65F5]";
  } else if (variant === "outline") {
    styles += "border border-[#3C65F5] text-[#3C65F5] hover:bg-indigo-50";
  } else if (variant === "danger") {
    styles += "bg-red-600 text-white hover:bg-red-500";
  } else {
    styles += "bg-gray-200 text-black";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
