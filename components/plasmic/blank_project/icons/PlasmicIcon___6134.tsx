// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6134IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6134Icon(props: _6134IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 2"}
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
        d={"M13.32 1.305H0V0h.306v.999h12.708V0h.306v1.305z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6134Icon;
/* prettier-ignore-end */
