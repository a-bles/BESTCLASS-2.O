// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6432IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6432Icon(props: _6432IconProps) {
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
        d={"M.058.052L.561.56.566.557.074.044.058.052z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.557.605L.535.585C.368.415.2.247.032.078L0 .046.038.022l.02-.01L.08 0 .1.02l.525.547-.067.038z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6432Icon;
/* prettier-ignore-end */
