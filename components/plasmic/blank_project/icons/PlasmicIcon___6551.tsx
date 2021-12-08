// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6551IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6551Icon(props: _6551IconProps) {
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
        d={"M.291 2.334L0 2.331.025 0l.291.003-.025 2.331z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6551Icon;
/* prettier-ignore-end */
