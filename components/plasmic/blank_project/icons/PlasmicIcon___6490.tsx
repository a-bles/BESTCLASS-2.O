// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6490IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6490Icon(props: _6490IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.389.015A5.077 5.077 0 00.044 2.19 7.41 7.41 0 01.389.015z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.08 2.19l-.072-.003v-.073A4.95 4.95 0 01.354 0l.065.028A6.124 6.124 0 00.1 1.862a8.75 8.75 0 01-.02.328z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6490Icon;
/* prettier-ignore-end */
