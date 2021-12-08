// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6209IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6209Icon(props: _6209IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 4"}
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
        d={"M11.56 0L0 3.509l.083.273 11.56-3.51L11.562 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6209Icon;
/* prettier-ignore-end */
