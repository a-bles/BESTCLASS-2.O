// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6032IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6032Icon(props: _6032IconProps) {
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
        d={"M2.232 3.564L0 1.167V0h.3v1.05l2.15 2.31-.218.204z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6032Icon;
/* prettier-ignore-end */
