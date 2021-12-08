// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6480IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6480Icon(props: _6480IconProps) {
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
        d={"M.22.01a8.18 8.18 0 00-.154 2.516C.15 1.69-.001.839.22.01z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.102 2.529L.03 2.526c0-.184-.005-.371-.01-.552A5.951 5.951 0 01.187 0l.068.02a5.738 5.738 0 00-.126 1.53c.008.326-.001.653-.027.979z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6480Icon;
/* prettier-ignore-end */
