// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6533IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6533Icon(props: _6533IconProps) {
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
        d={"M.154 0L0 .25l.346.215.155-.249L.154 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6533Icon;
/* prettier-ignore-end */
