// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6031IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6031Icon(props: _6031IconProps) {
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
        d={"M0 3.842V0h.298v3.081L2.23 1.005l.22.203L0 3.842z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6031Icon;
/* prettier-ignore-end */
