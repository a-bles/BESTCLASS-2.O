// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6591IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6591Icon(props: _6591IconProps) {
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
        d={
          "M.593.936L.54.932C.253.908.05.669 0 .292l.289-.04c.01.08.057.326.226.38C.688.463.798.24.828 0l.288.042a1.28 1.28 0 01-.48.865L.593.936z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6591Icon;
/* prettier-ignore-end */
