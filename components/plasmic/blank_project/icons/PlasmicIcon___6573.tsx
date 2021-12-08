// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6573IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6573Icon(props: _6573IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M.592.936L.538.932C.251.908.051.669 0 .292l.289-.04c.013.102.062.33.224.38C.687.463.797.24.827 0l.289.042a1.28 1.28 0 01-.48.865L.592.936z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6573Icon;
/* prettier-ignore-end */
