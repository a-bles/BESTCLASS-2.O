// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6240IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6240Icon(props: _6240IconProps) {
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
        d={"M.024 0L0 2.28l.285.004L.31.003.024 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6240Icon;
/* prettier-ignore-end */
