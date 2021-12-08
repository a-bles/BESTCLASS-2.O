// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6252IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6252Icon(props: _6252IconProps) {
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
        d={"M.062 0L0 .279 1.36.58l.063-.279L.062 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6252Icon;
/* prettier-ignore-end */
