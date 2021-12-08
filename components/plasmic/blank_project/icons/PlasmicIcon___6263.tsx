// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6263IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6263Icon(props: _6263IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M.58.914L.527.91C.245.887.047.652 0 .284L.283.247c.009.078.052.319.22.37C.672.453.78.236.809 0l.282.04A1.253 1.253 0 01.62.888L.58.915z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6263Icon;
/* prettier-ignore-end */
