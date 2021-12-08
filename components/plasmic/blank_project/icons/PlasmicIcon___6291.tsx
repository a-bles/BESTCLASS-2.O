// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6291IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6291Icon(props: _6291IconProps) {
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
          "M1.6 2.697a.532.532 0 00-.275-.202l-.112-.025V1.258a.77.77 0 00-.25-.526.527.527 0 00-.48 0L.315.796.29.618C.248.31.025.288 0 .286L.012 0a.6.6 0 01.522.418.722.722 0 01.585.074 1.053 1.053 0 01.378.757v1.003c.13.06.244.152.33.267l-.228.178z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6291Icon;
/* prettier-ignore-end */
