// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6589IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6589Icon(props: _6589IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
        d={
          "M1.09 2.767H.798L.82.739a.944.944 0 01-.185.166l-.043.03L.54.93C.252.907.051.668 0 .29L.288.25c.015.103.064.33.226.38C.688.463.798.241.827 0l.29.022-.027 2.745z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6589Icon;
/* prettier-ignore-end */
