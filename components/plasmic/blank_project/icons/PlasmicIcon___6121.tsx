// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6121IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6121Icon(props: _6121IconProps) {
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
        d={"M0 .404v7.024l.162-.192S.237.71.162.207C.087-.293 0 .251 0 .404z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6121Icon;
/* prettier-ignore-end */
