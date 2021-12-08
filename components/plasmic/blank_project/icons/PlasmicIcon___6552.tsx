// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6552IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6552Icon(props: _6552IconProps) {
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
        d={"M.025 0L0 2.33l.291.004.025-2.33L.025 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6552Icon;
/* prettier-ignore-end */
