// import React from "react";

// type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
//   React.AnchorHTMLAttributes<HTMLAnchorElement> & {
//     href?: string;
//     children: React.ReactNode;
//   };

// const Button: React.FC<ButtonProps> = ({ href, children, className = "", ...props }) => {
//   const commonClasses = `
//     group relative inline-flex items-center gap-3 rounded-full 
//     bg-white border border-neutral-600 px-5 py-3 text-bodysmall font-semibold text-black 
//     transition-colors duration-300 cursor-pointer hover:bg-neutral-900 hover:text-white
//     ${className}
//   `;

//   const Icon = () => (
//     <span
//       className="
//         relative grid h-6 w-6 place-items-center rounded-full 
//         bg-white border border-neutral-800 text-black transition-colors duration-300 
//         group-hover:text-black overflow-hidden
//       "
//     >
//       {/* Main Icon */}
//       <svg
//         viewBox="0 0 14 15"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-3 w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6"
//       >
//         <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
//       </svg>

//       {/* Copy Icon */}
//       <svg
//         viewBox="0 0 14 15"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute h-3 w-3 translate-x-[-150%] translate-y-[150%] transition-transform duration-300 ease-in-out delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
//       >
//         <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
//       </svg>
//     </span>
//   );

//   // If href exists → render <a>
//   if (href) {
//     return (
//       <a href={href} className={commonClasses} {...props}>
//         <Icon />
//         {children}
//       </a>
//     );
//   }

//   // Else → render <button>
//   return (
//     <Button className={commonClasses} {...props}>
//       <Icon />
//       {children}
//     </Button>
//   );
// };

// export default Button;


// import React from "react";

// type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
//   React.AnchorHTMLAttributes<HTMLAnchorElement> & {
//     href?: string;
//     children: React.ReactNode;
//   };

// const Button: React.FC<ButtonProps> = ({ href, children, className = "", ...props }) => {
//   const commonClasses = `
//     group relative inline-flex items-center justify-center gap-3 rounded-full 
//     bg-white border border-neutral-600 px-5 py-3 text-bodysmall font-semibold text-black 
//     transition-colors duration-300 cursor-pointer hover:bg-neutral-900 hover:text-white
//     w-full sm:w-auto            /* fluid width on mobile, auto on desktop */
//     sm:px-4 sm:py-2 sm:text-xs sm:gap-2
//     ${className}
//   `;

//   const Icon = () => (
//     <span
//       className="
//         relative grid h-6 w-6 place-items-center rounded-full 
//         bg-white border border-neutral-800 text-black transition-colors duration-300 
//         group-hover:text-black overflow-hidden
//         sm:h-5 sm:w-5
//       "
//     >
//       {/* Main Icon */}
//       <svg
//         viewBox="0 0 14 15"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-3 w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6
//           sm:h-2.5 sm:w-2.5
//         "
//       >
//         <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
//       </svg>

//       {/* Copy Icon */}
//       <svg
//         viewBox="0 0 14 15"
//         fill="currentColor"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute h-3 w-3 translate-x-[-150%] translate-y-[150%] transition-transform duration-300 ease-in-out delay-100 group-hover:translate-x-0 group-hover:translate-y-0
//           sm:h-2.5 sm:w-2.5
//         "
//       >
//         <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
//       </svg>
//     </span>
//   );

//   if (href) {
//     return (
//       <a href={href} className={commonClasses} {...props}>
//         <Icon />
//         {children}
//       </a>
//     );
//   }

//   return (
//     <Button className={commonClasses} {...props}>
//       <Icon />
//       {children}
//     </Button>
//   );
// };

// export default Button;


import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    children: React.ReactNode;
  };

const Button: React.FC<ButtonProps> = ({ href, children, className = "", ...props }) => {
  const commonClasses = `
    group relative inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full 
    bg-white border border-neutral-600 
    h-[32px] sm:h-[48px]                      
    px-4 sm:px-5                              
    text-[14px] sm:text-bodysmall                
    font-medium sm:font-medium text-black 
    transition-colors duration-300 cursor-pointer 
    hover:bg-neutral-900 hover:text-white
    w-auto
    ${className}
  `;

  const Icon = () => (
    <span
      className="
        relative grid place-items-center rounded-full 
        bg-white border border-neutral-800 text-black transition-colors duration-300 
        overflow-hidden
        h-5 w-5 sm:h-6 sm:w-6                  /* icon adjusts to button height */
      "
    >
      {/* Main Icon */}
      <svg
        viewBox="0 0 14 15"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6"
      >
        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
      </svg>

      {/* Copy Icon */}
      <svg
        viewBox="0 0 14 15"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-2.5 w-2.5 sm:h-3 sm:w-3 translate-x-[-150%] translate-y-[150%] transition-transform duration-300 ease-in-out delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
      >
        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
      </svg>
    </span>
  );

  if (href) {
    return (
      <a href={href} className={commonClasses} {...props}>
        <Icon />
        {children}
      </a>
    );
  }

  return (
    <Button className={commonClasses} {...props}>
      <Icon />
      {children}
    </Button>
  );
};

export default Button;
