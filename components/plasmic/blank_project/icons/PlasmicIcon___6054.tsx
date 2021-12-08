// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6054IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6054Icon(props: _6054IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 4"}
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
          "M.299 3.854H0V.84L.089.703 1.7 0l1.535.013 1.551.69-.12.274-1.523-.68h-1.41L.299.936v2.919z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6054Icon;
/* prettier-ignore-end */
