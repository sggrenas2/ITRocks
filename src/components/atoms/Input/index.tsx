import { FormEventHandler, SyntheticEvent } from "react";
import getClasses from "./style";
import React from "react";

export const Input = ({
  label = "name",
  error = "ocurrio un error",
  sizeInput = "full",
  ...props
}: InputProps) => {
  const [isValid, setIsValid] = React.useState<boolean>(true);

  const handleError: FormEventHandler<HTMLInputElement> = (
    ev: SyntheticEvent<HTMLInputElement>
  ) => {
    const target = ev.target as HTMLInputElement
    if(!target.validity.valid){
        setIsValid(false)
        setTimeout(() => {
          setIsValid(true)
        },1500)
    }
  };

  const classes = getClasses({ sizeInput, isValid });

  return (
    <div className={`flex flex-col gap-1 ${props.className || ""}`}>
      {label && <label className="text-sm font-medium text-oxford-blue">{label}</label>}
      <input className={`${classes}`} onInvalid={handleError} {...props} />
      {!isValid && <span className="text-xs text-red-custom">{error}</span>}
    </div>
  );
};
