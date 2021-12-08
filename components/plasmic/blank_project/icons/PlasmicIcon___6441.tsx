// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6441IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6441Icon(props: _6441IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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

      <path d={"M.067.036v1.627H.035V.036h.032z"} fill={"currentColor"}></path>

      <path d={"M.102 0H0v1.698h.102V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _6441Icon;
/* prettier-ignore-end */
