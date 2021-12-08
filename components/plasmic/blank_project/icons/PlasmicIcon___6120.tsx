// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6120IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6120Icon(props: _6120IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 8"}
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
        d={"M0 .404V7.12l.162.115S.237.71.162.207C.087-.293 0 .251 0 .404z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6120Icon;
/* prettier-ignore-end */
