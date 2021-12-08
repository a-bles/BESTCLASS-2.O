// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6553IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6553Icon(props: _6553IconProps) {
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
        d={"M.291 2.325H0L.009 0h.29L.292 2.325z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6553Icon;
/* prettier-ignore-end */
