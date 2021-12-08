// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6567IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6567Icon(props: _6567IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M3.285 3.022l-.291-.003a2.804 2.804 0 00-.97-2.33A2.124 2.124 0 00.084.412L0 .133a2.411 2.411 0 012.199.32 3.09 3.09 0 011.086 2.569z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6567Icon;
/* prettier-ignore-end */
