// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6171IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6171Icon(props: _6171IconProps) {
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

      <path d={"M.035.053h10.461V.036H.035v.017z"} fill={"currentColor"}></path>

      <path
        d={"M10.528.087H0V0h10.532v.056l-.004.031z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6171Icon;
/* prettier-ignore-end */
