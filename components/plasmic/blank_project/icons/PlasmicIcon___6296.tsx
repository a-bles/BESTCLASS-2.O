// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6296IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6296Icon(props: _6296IconProps) {
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
        d={"M.285.642L0 .64.007 0l.285.003-.007.64z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6296Icon;
/* prettier-ignore-end */
