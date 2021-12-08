// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6050IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6050Icon(props: _6050IconProps) {
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
          "M.298 3.854H0V.84L.089.703 1.699 0h2.928v.299H1.732L.298.936v2.918z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6050Icon;
/* prettier-ignore-end */
