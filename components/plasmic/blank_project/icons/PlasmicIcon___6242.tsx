// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6242IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6242Icon(props: _6242IconProps) {
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
        d={"M.285 2.38L0 2.377.025 0l.286.003L.285 2.38z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6242Icon;
/* prettier-ignore-end */
