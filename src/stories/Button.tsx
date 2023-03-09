import React from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const sizeClassMap = {
  small: "btn-sm",
  medium: "",
  large: "btn-lg",
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const modeClass = primary ? "btn-primary" : "btn-secondary";
  const sizeClass = sizeClassMap[size];
  return (
    <button
      type="button"
      className={["btn text-white fw-bold", sizeClass, modeClass].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
