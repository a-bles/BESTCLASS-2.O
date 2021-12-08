// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6331IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6331Icon(props: _6331IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 4"}
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
          "M.305 3.128H0V.025L.303 0A.345.345 0 10.94 0l.3.05a.91.91 0 01-.57.735L.622.801.575.785a.778.778 0 01-.27-.153v2.496z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6331Icon;
/* prettier-ignore-end */
