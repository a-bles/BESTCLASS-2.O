// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6214IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6214Icon(props: _6214IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
        d={"M.302 1.4L0 .063.278 0l.234 1.037.589-.178.083.273-.882.268z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6214Icon;
/* prettier-ignore-end */
