// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6335IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6335Icon(props: _6335IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
          "M.306 5.298H0V.928A.969.969 0 01.576.014L.623 0 .67.015a.97.97 0 01.574.913v1.21H.938V.928C.938.924.935.468.623.324.307.469.306.924.306.927v4.37z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6335Icon;
/* prettier-ignore-end */
