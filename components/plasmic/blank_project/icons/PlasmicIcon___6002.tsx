// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6002IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6002Icon(props: _6002IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.3 2.092H0V.909A.95.95 0 01.562.015L.61 0l.046.015a.949.949 0 01.563.894v.826h-.3V.91C.92.904.914.457.61.317.305.458.3.904.3.908v1.184z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6002Icon;
/* prettier-ignore-end */
