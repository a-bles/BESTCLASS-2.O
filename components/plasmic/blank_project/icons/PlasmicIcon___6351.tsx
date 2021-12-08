// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6351IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6351Icon(props: _6351IconProps) {
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
          "M1.243 5.313H.938V.927C.938.923.932.467.622.323.307.467.305.923.305.927v4.386H0V.927A.969.969 0 01.574.015L.622 0l.046.015a.969.969 0 01.575.913v4.385z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6351Icon;
/* prettier-ignore-end */
