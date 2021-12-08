// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6144IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6144Icon(props: _6144IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 2"}
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
        d={"M6.668 1.426H0V0h6.668v.299H.298v.828h6.37v.3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6144Icon;
/* prettier-ignore-end */
