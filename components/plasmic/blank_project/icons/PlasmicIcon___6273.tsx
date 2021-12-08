// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6273IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6273Icon(props: _6273IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
          "M.285 2.847L0 2.844.02 1.02A1.35 1.35 0 01.494 0l.162.236a1.072 1.072 0 00-.352.787L.285 2.847z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6273Icon;
/* prettier-ignore-end */
