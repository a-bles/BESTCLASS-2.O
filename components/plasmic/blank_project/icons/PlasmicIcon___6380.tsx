// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6380IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6380Icon(props: _6380IconProps) {
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
        d={"M2.28 3.642L0 1.192V0h.306v1.073l2.198 2.36-.223.209z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6380Icon;
/* prettier-ignore-end */
