// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6352IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6352Icon(props: _6352IconProps) {
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
          "M.306 5.74H0V.927A.97.97 0 01.575.015L.623 0l.046.015a.97.97 0 01.574.913v1.21H.938V.928C.938.924.933.468.623.324.307.467.306.924.306.928v4.811z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6352Icon;
/* prettier-ignore-end */
