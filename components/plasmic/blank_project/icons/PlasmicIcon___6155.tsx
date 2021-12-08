// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6155IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6155Icon(props: _6155IconProps) {
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
        d={"M.066 2.272L.13.007C.031.757.01 1.517.066 2.272z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.1 2.272H.033c0-.223-.006-.45-.014-.669A6.489 6.489 0 01.097 0l.068.008-.064 2.264z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6155Icon;
/* prettier-ignore-end */
