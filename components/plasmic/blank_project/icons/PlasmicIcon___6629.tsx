// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6629IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6629Icon(props: _6629IconProps) {
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
        d={"M1.476 0L0 .452.085.73 1.562.279 1.476 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6629Icon;
/* prettier-ignore-end */
