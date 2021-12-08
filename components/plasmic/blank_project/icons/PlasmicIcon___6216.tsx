// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6216IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6216Icon(props: _6216IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
        d={"M.301 1.4L0 .063.279 0l.233 1.037.274-.083.084.273-.569.173z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6216Icon;
/* prettier-ignore-end */
