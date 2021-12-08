// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6498IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6498Icon(props: _6498IconProps) {
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
        d={"M.249.022s-.13.392-.02.432c0 0-.35-.11-.101-.432"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.217.488A.28.28 0 01.1 0l.057.043a.267.267 0 00-.075.236c.013.037.038.07.07.094C.153.249.174.126.215.01l.068.022C.221.22.201.406.242.42L.217.488z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6498Icon;
/* prettier-ignore-end */
