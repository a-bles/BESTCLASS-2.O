// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6584IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6584Icon(props: _6584IconProps) {
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
        d={
          "M.291 2.91L0 2.905l.02-1.863A1.38 1.38 0 01.505 0l.166.24a1.096 1.096 0 00-.36.805L.291 2.91z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6584Icon;
/* prettier-ignore-end */
