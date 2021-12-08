// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6587IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6587Icon(props: _6587IconProps) {
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
          "M1.09 2.773l-.292-.004.02-2.027a.96.96 0 01-.182.166L.592.936.54.932C.252.909.049.669 0 .292l.288-.04c.011.08.058.326.226.38C.687.461.798.24.827 0l.29.022-.028 2.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6587Icon;
/* prettier-ignore-end */
