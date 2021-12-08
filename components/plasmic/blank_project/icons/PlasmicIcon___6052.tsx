// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6052IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6052Icon(props: _6052IconProps) {
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
        d={"M.121 0L0 .273l1.551.69.121-.273L.122 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6052Icon;
/* prettier-ignore-end */
