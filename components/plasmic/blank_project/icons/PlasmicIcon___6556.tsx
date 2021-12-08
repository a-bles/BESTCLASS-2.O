// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6556IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6556Icon(props: _6556IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 23"}
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
        d={"M.292 22.176L0 22.173.236 0l.292.003-.236 22.173z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6556Icon;
/* prettier-ignore-end */
