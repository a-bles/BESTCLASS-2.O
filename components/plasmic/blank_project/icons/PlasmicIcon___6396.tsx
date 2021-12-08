// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6396IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6396Icon(props: _6396IconProps) {
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
        d={"M1.586 0L0 .703l.124.279L1.71.279 1.586 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6396Icon;
/* prettier-ignore-end */
