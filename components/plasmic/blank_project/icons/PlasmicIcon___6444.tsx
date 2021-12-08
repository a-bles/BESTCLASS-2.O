// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6444IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6444Icon(props: _6444IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={"M.033.022s.13.392.022.432c0 0 .35-.11.101-.432"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.065.488L.043.42C.083.406.063.22 0 .032L.068.01C.11.126.132.25.132.373A.192.192 0 00.203.279.267.267 0 00.128.043L.185 0a.336.336 0 01.086.3.328.328 0 01-.206.188z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6444Icon;
/* prettier-ignore-end */
