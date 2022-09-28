import { ChangeEventHandler } from "react";

type TextFieldProps = {
  name?: string;
  id?: string;
  autoComplete?: string;
  type?: "email" | "password" | "search" | "text";
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const TextField = (props: TextFieldProps) => {
  return (
    <div>
      {props.label && (
        <label className="mb-2" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input
        id={props.id}
        className="block w-full bg-transparent outline-none p-3 border border-accent-6 focus:border-accent-3 rounded placeholder:text-accent-5 transition-colors"
        type={props.type || "text"}
        name={props.name || props.id}
        autoComplete={props.autoComplete || props.name || props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextField;
