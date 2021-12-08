// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6000IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6000Icon(props: _6000IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
          "M1.216 5.2H.918V.908C.918.903.912.457.608.316.3.456.299.902.299.908V5.2H0V.908A.948.948 0 01.562.015L.609 0l.045.015a.948.948 0 01.563.894v4.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6000Icon;
/* prettier-ignore-end */
