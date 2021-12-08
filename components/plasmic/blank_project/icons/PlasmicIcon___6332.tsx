// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6332IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6332Icon(props: _6332IconProps) {
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
          "M.62.8L.573.786A.914.914 0 010 .05L.3 0a.345.345 0 10.638 0l.301.05a.907.907 0 01-.572.735L.62.801z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6332Icon;
/* prettier-ignore-end */
