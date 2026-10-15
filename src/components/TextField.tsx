import React from "react";
import { useFormik } from "formik";
import { IconType } from "react-icons";

interface TextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  className?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, placeholder, type = "text", leftIcon: LeftIcon, rightIcon: RightIcon, className = "" }) => {
  const hasError = false;

  return (
    <div className={`text-field-wrapper ${className}`}>
      {label && (
        <label htmlFor={name} className="text-field-label">
          {label}
        </label>
      )}
      <div className="text-field-container">
        {LeftIcon && <span className="text-field-icon left-icon">{LeftIcon}</span>}
        <input id={name} type={type} placeholder={placeholder} className={`text-field-input ${hasError ? "error" : ""} ${LeftIcon ? "with-left-icon" : ""} ${RightIcon ? "with-right-icon" : ""}`} />
        {RightIcon && <span className="text-field-icon right-icon">{RightIcon}</span>}
      </div>
      {/* {hasError && <span className="text-field-error">{typeof formik.errors[name] === "string" ? formik.errors[name] : ""}</span>} */}
    </div>
  );
};

export default TextField;
