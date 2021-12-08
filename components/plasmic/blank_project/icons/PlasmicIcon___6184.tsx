// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6184IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6184Icon(props: _6184IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 69"}
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
          "M14.413 68.918h-.306V.37C12.365 1.103.252 6.658.305 19.088v43.419h13.671v.306H.152L0 62.66V19.09C-.057 5.55 14.063.054 14.206 0l.207.143v68.775z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6184Icon;
/* prettier-ignore-end */
