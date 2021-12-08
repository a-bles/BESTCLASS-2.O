// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6576IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6576Icon(props: _6576IconProps) {
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
          "M1.084 5.37l-.292-.004L.84.821C.84.815.84.378.618.305a1.151 1.151 0 00-.313.77L.292 2.333 0 2.33l.014-1.257A1.378 1.378 0 01.498.03L.542 0l.053.005c.435.034.543.533.538.82l-.05 4.544z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6576Icon;
/* prettier-ignore-end */
