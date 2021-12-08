// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6397IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6397Icon(props: _6397IconProps) {
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
        d={"M.124 0L0 .279l1.585.705.124-.279L.124 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6397Icon;
/* prettier-ignore-end */
