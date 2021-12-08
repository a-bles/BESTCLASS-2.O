// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6557IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6557Icon(props: _6557IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 23"}
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
        d={"M.291 22.175L0 22.172.236 0l.292.003L.29 22.175z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6557Icon;
/* prettier-ignore-end */
