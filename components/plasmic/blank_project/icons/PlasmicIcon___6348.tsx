// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6348IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6348Icon(props: _6348IconProps) {
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
          "M.306 2.67H0V.025L.304 0a.345.345 0 10.637 0l.302.05A.918.918 0 01.67.788L.622.802.575.787a.755.755 0 01-.27-.155V2.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6348Icon;
/* prettier-ignore-end */
