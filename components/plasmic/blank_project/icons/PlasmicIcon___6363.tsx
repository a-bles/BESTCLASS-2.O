// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6363IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6363Icon(props: _6363IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={"M.386 0L0 .308l.19.238.385-.308L.385 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6363Icon;
/* prettier-ignore-end */
