// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6314IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6314Icon(props: _6314IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
        d={"M1.446 0L0 .438l.083.273L1.529.273 1.446 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6314Icon;
/* prettier-ignore-end */
