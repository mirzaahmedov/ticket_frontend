import { ForwardedRef, forwardRef } from "react";

type TextfieldProps = React.InputHTMLAttributes<HTMLInputElement>;

const Textfield = forwardRef(
  (props: TextfieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className="w-full max-w-full h-16 px-4 bg-slate-100 text-slate-700 placeholder:text-slate-400 rounded-md"
        {...props}
      />
    );
  },
);

export default Textfield;
