// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6354IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6354Icon(props: _6354IconProps) {
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
          "M1.244 2.187H.938V.927C.938.924.933.468.622.325.307.467.305.923.305.927v.846H0V.928A.97.97 0 01.575.015L.623 0 .67.015a.971.971 0 01.575.914l-.001 1.258z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6354Icon;
/* prettier-ignore-end */
