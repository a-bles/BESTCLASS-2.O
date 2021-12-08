// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6349IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6349Icon(props: _6349IconProps) {
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
          "M.62.802L.572.787A.915.915 0 010 .05L.302.001a.632.632 0 00.32.477A.623.623 0 00.942 0l.301.05a.917.917 0 01-.572.737L.62.802z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6349Icon;
/* prettier-ignore-end */
