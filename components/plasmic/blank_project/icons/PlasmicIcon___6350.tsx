// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6350IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6350Icon(props: _6350IconProps) {
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
        d={
          "M.62.802L.572.787A.912.912 0 010 .05L.301.001a.631.631 0 00.32.477A.622.622 0 00.942 0l.302.05a.917.917 0 01-.572.737L.62.802z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6350Icon;
/* prettier-ignore-end */
