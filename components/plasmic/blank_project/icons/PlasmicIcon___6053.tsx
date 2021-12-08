// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6053IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6053Icon(props: _6053IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 1"}
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
        d={"M4.414.978L2.892.298H0V0l2.984.013 1.55.69-.12.275z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6053Icon;
/* prettier-ignore-end */
