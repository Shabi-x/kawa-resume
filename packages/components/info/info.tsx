import React, { forwardRef, memo } from "react";
import type { InfoProps } from "./info.types";

const Info = memo(
  forwardRef<HTMLDivElement, { infoList: InfoProps }>(
    ({ infoList }, ref) => {
      return (
        <div ref={ref} role="info-list">
          {infoList.map((item, index) => (
            <div key={index} role="info-item">
              <span>{item.title}:</span>
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      );
    }
  )
);

export default Info;
