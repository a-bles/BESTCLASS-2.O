// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6238IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6238Icon(props: _6238IconProps) {
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
        d={"M.286 2.283L0 2.28.025 0 .31.003l-.024 2.28z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6238Icon;
/* prettier-ignore-end */
