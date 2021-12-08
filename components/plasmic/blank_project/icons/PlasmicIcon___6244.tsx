// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6244IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6244Icon(props: _6244IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 22"}
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
        d={"M.286 21.702L0 21.699.231 0l.285.003-.23 21.699z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6244Icon;
/* prettier-ignore-end */
