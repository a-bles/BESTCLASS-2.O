// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6353IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6353Icon(props: _6353IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.306 2.138H0V.928A.97.97 0 01.575.015L.622 0 .67.015a.97.97 0 01.574.914v.844H.94V.928C.94.924.934.468.623.324.31.467.307.924.307.928v1.21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6353Icon;
/* prettier-ignore-end */
