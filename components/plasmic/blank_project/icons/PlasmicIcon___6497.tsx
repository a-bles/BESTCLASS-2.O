// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6497IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6497Icon(props: _6497IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 1"}
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

      <path d={"M.035.054h10.69V.036H.036v.018z"} fill={"currentColor"}></path>

      <path
        d={"M10.758.09H0V0h10.762v.058l-.005.031z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6497Icon;
/* prettier-ignore-end */
