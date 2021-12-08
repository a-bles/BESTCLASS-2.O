// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6439IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6439Icon(props: _6439IconProps) {
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
        d={"M.035 2.17V.04H.06v2.137L.035 2.17z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M.095 2.226l-.047-.015-.02-.007L0 2.198V0l.095.008v2.218z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6439Icon;
/* prettier-ignore-end */
