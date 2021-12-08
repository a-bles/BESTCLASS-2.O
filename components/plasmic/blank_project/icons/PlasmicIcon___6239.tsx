// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6239IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6239Icon(props: _6239IconProps) {
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
        d={"M.285 2.284L0 2.282.025 0 .31.003.285 2.284z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6239Icon;
/* prettier-ignore-end */
