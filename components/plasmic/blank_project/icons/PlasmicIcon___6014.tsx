// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6014IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6014Icon(props: _6014IconProps) {
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
        d={"M.377 0L0 .3l.186.233.377-.301L.377 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6014Icon;
/* prettier-ignore-end */
