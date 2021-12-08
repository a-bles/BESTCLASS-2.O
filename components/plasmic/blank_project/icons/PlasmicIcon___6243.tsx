// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6243IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6243Icon(props: _6243IconProps) {
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
        d={"M.285 2.38L0 2.376.026 0l.285.003-.026 2.376z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6243Icon;
/* prettier-ignore-end */
