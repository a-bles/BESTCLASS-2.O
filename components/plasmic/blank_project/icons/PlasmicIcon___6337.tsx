// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6337IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6337Icon(props: _6337IconProps) {
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
          "M1.244 2.187H.94V.928C.939.924.934.468.622.323.308.468.306.923.306.927v.846H0V.928A.97.97 0 01.575.015L.622 0 .67.015a.971.971 0 01.575.914v1.258z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6337Icon;
/* prettier-ignore-end */
