import React, { memo } from "react";

const Tooltip = memo((props) => {
  return (
    <span className="group relative">
      {/* Tooltip */}
      <span className="pointer-events-none absolute top-full left-1/2 -translate-x-[39%] mt-2 whitespace-nowrap rounded bg-[#211D80] px-2 py-1 opacity-0 transition 
                        before:absolute before:left-1/2 before:-top-2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-[#211D80] before:content-[''] 
                        group-hover:opacity-100 text-xs text-white">
        {props.text}
      </span>

      {props.children}
    </span>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
