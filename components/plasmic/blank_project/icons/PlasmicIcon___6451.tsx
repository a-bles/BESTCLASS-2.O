// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6451IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6451Icon(props: _6451IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 8"}
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
        d={"M0 .413v6.863l.165.118S.242.724.165.212C.09-.3 0 .257 0 .412z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6451Icon;
/* prettier-ignore-end */
