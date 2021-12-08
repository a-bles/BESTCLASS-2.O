// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6033IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6033Icon(props: _6033IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 24"}
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
        d={"M.3 23.319H0V2.397L2.23 0l.22.204L.3 2.514v20.805z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6033Icon;
/* prettier-ignore-end */
