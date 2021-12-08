// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6035IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6035Icon(props: _6035IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
        d={"M.218 2.557L0 2.354 2.193 0l.22.204L.218 2.557z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6035Icon;
/* prettier-ignore-end */
