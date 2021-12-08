// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6510IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6510Icon(props: _6510IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.486 1.789c-.054-.013-.124-.054-.16-.035-.37.19-.743.373-1.094.593a3.926 3.926 0 00-.838.647.946.946 0 00-.16 1.124c-.448-.462-.296-.8.836-1.91l-.143-.2-.005.007.542.075a6.493 6.493 0 00-.533-.407A1.032 1.032 0 01.988 0l.024.026C.982.367.959.71.918 1.05c-.034.283-.046.579.278.677a1.23 1.23 0 00.977.042c-.353-.153-.751-.153-.914-.48h.97c.021.025.091.12.16.213l.085.293.012-.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6510Icon;
/* prettier-ignore-end */
