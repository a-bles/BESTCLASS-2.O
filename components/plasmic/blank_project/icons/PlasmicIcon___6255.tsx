// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6255IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6255Icon(props: _6255IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M3.215 2.957l-.285-.003a2.744 2.744 0 00-.95-2.28A2.079 2.079 0 00.083.404L0 .13a2.36 2.36 0 012.152.313 3.024 3.024 0 011.063 2.513z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6255Icon;
/* prettier-ignore-end */
