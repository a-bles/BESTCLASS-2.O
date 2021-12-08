// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6301IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6301Icon(props: _6301IconProps) {
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
        d={"M.513 0L0 .156l.083.272.512-.155L.513 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6301Icon;
/* prettier-ignore-end */
