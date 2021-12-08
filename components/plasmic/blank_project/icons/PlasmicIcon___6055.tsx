// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6055IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6055Icon(props: _6055IconProps) {
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
        d={"M.3 3.63H0A3.634 3.634 0 013.63 0v.298A3.334 3.334 0 00.3 3.63z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6055Icon;
/* prettier-ignore-end */
