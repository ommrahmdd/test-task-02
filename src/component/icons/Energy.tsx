import React from "react";

export default function Energy({ _className }: { _className?: string }) {
  return (
    <svg
      width="18"
      height="24"
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${_className}`}
    >
      <path
        d="M1.14508 13.4145L10.5013 0.459648C11.1202 -0.397256 12.4722 0.166898 12.2984 1.20954L11 8.99995H16.0442C16.86 8.99995 17.3326 9.92411 16.8549 10.5854L7.49867 23.5403C6.8798 24.3972 5.52782 23.833 5.7016 22.7904L7 14.9999H1.95576C1.13999 14.9999 0.66745 14.0758 1.14508 13.4145Z"
        fill="#777E91"
      />
    </svg>
  );
}
