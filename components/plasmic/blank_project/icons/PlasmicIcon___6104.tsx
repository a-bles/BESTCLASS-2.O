// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6104IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6104Icon(props: _6104IconProps) {
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

      <path d={"M10.5.053H.038V.035H10.5v.018z"} fill={"currentColor"}></path>

      <path d={"M10.532 0H0v.087h10.532V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _6104Icon;
/* prettier-ignore-end */
