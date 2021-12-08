// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6346IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6346Icon(props: _6346IconProps) {
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
          "M.306 2.67H0V.025L.303 0A.345.345 0 10.94 0l.302.05a.919.919 0 01-.573.737L.622.802.574.787A.74.74 0 01.307.632L.306 2.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6346Icon;
/* prettier-ignore-end */
