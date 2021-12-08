// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6393IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6393Icon(props: _6393IconProps) {
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
        d={"M.123.984L0 .704 1.585 0l.123.28L.123.983z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6393Icon;
/* prettier-ignore-end */
