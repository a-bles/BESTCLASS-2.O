// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6382IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6382Icon(props: _6382IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
        d={"M2.545 3.926L0 1.193V0h.306v1.073L2.24 3.15V.002h.305v3.924z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6382Icon;
/* prettier-ignore-end */
