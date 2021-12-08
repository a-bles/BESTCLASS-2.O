// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6570IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6570Icon(props: _6570IconProps) {
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
          "M.292 2.938L0 2.934l.02-1.863A1.373 1.373 0 01.507.03L.549 0l.053.004c.435.035.544.534.54.82l-.02 1.863-.292-.003L.85.82C.85.816.85.378.627.305a1.15 1.15 0 00-.313.77L.292 2.938z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6570Icon;
/* prettier-ignore-end */
