import { FC } from "react";

type InvalidAlertProps = {
  className?: string;
};

const InvalidAlert: FC<InvalidAlertProps> = (props) => (
  <div className={`flex text-yellow-500 ${props.className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="mx-2 h-6 w-6 stroke-current"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <label>入力が適切ではありません</label>
  </div>
);

export default InvalidAlert;
