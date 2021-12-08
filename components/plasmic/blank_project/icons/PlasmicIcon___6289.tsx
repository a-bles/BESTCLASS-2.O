// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6289IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6289Icon(props: _6289IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M.257 3.778L0 3.653a1.96 1.96 0 01.394-.554l.02-1.04A1.514 1.514 0 011.379.722c.068-.292.24-.548.484-.722l.154.24a.933.933 0 00-.373.618l-.015.097-.095.022C.775 1.148.701 2.062.7 2.073l-.023 1.16-.052.041a1.58 1.58 0 00-.368.504z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6289Icon;
/* prettier-ignore-end */
