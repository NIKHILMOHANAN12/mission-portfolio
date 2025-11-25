// import React from 'react'

// const Button = () => {
//   return (
//     <div>
//       <div className='px-6 py-3 border rounded-full border-black w-fit'>
//         Button Name
//       </div>
//     </div>
//   )
// }

// export default Button


import React from "react";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <a
      {...props} // spreads href, target, download, rel, etc.
      className="
        group relative inline-flex items-center gap-3 rounded-full 
        bg-white border border-neutral-600 px-5 py-3 text-bodysmall font-semibold text-black 
        transition-colors duration-300 cursor-pointer hover:bg-neutral-900 hover:text-white
      "
    >
      <span
        className="
          relative grid h-6 w-6 place-items-center rounded-full 
          bg-white border border-neutral-800 text-black transition-colors duration-300 
          group-hover:text-black overflow-hidden
        "
      >
        {/* Main Icon */}
        <svg
          viewBox="0 0 14 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6"
        >
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
        </svg>

        {/* Copy Icon */}
        <svg
          viewBox="0 0 14 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-3 w-3 translate-x-[-150%] translate-y-[150%] transition-transform duration-300 ease-in-out delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
        >
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
        </svg>
      </span>

      {/* Button Text */}
      {children}
    </a>
  );
};

export default Button;
