import { ReactNode, useCallback, useState } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = useCallback(() => {
    if (!disabled) {
      setDisabled(true);
    }
  }, [disabled]);

  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";
  const enabledClasses = "bg-blue-700 hover:bg-blue-500";
  const disabledClasses = "bg-gray-400 cursor-not-allowed";

  return (
    <div
      aria-disabled={disabled}
      className={`${baseClasses} ${
        disabled ? disabledClasses : enabledClasses
      }`}
    >
      <button type="button" onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
