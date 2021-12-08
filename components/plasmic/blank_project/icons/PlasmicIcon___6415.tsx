// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6415IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6415Icon(props: _6415IconProps) {
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
        d={"M.837.835H0V.53h.773L1.285 0l.22.213L.946.79l-.11.045z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6415Icon;
/* prettier-ignore-end */
