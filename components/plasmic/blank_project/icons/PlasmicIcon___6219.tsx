// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6219IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6219Icon(props: _6219IconProps) {
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
        d={"M.344.453L0 .244.148 0 .49.209.344.453z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6219Icon;
/* prettier-ignore-end */
