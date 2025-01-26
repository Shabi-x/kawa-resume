import React, { forwardRef, memo } from "react";
import type { InfoProps } from "./info.types";


export const Info = memo(
  forwardRef<HTMLDivElement, { infoList: InfoProps }>(
    ({ infoList }, ref) => {
      return (
        <div 
          ref={ref} 
          className="flex flex-row flex-wrap gap-2 w-full"
        >
          {infoList.map((item, index) => (
            <div 
              key={index} 
              className="flex-[0_1_calc(50%-0.5rem)] flex items-center"
            >
              <span className="font-bold mr-1">{item.title}:</span>
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      );
    }
  )
);

export default Info;