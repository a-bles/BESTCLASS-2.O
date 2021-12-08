// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6241IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6241Icon(props: _6241IconProps) {
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
        d={"M.285 2.275H0L.008 0h.285L.285 2.275z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6241Icon;
/* prettier-ignore-end */
