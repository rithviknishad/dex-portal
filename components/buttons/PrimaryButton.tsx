import { MouseEventHandler, ReactNode } from "react";

type ButtonBaseProps = {
  name?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type ButtonWithChildrenProps = ButtonBaseProps & {
  makeChildren?: false;
  children: ReactNode;
};

type ButtonWithIconAndLabelProps = ButtonBaseProps & {
  makeChildren: true;
  icon?: ReactNode;
  label: string;
};

type PrimaryButtonProps = ButtonWithChildrenProps | ButtonWithIconAndLabelProps;

const PrimaryButton = (props: PrimaryButtonProps) => {
  const children = props.makeChildren ? (
    <div className="flex items-center font-medium">
      {props.icon && <div className="ml-2 text-xl">{props.icon}</div>}
      <span className="flex-1">{props.label}</span>
    </div>
  ) : (
    props.children
  );

  return (
    <button
      className={[
        "rounded p-2 bg-success border border-success hover:bg-transparent hover:text-success transition-colors",
        props.className,
      ].join(" ")}
      name={props.name}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
