import { useTheme } from "next-themes";
import { ReactNode } from "react";

const AuthCanvas = (props: { children: ReactNode }) => {
  const { theme, setTheme, themes } = useTheme();

  setTheme("dark");

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {props.children}
    </div>
  );
};

export default AuthCanvas;
