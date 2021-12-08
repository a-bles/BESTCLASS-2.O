// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6049IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6049Icon(props: _6049IconProps) {
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
        d={"M1.55.963L0 .273.12 0l1.552.69-.121.273z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6049Icon;
/* prettier-ignore-end */
