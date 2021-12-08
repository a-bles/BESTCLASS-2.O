// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6003IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6003Icon(props: _6003IconProps) {
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
          "M1.217 2.14h-.3V.908C.918.903.914.457.61.317.3.457.299.903.299.907v.828H0V.91A.949.949 0 01.563.015L.609 0l.047.015a.95.95 0 01.562.894V2.14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6003Icon;
/* prettier-ignore-end */
