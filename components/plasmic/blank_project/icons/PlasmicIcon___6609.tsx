// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6609IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6609Icon(props: _6609IconProps) {
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
        d={"M.011 0L0 .904l.291.004.011-.904L.011 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6609Icon;
/* prettier-ignore-end */
