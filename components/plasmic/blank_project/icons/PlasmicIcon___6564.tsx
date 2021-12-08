// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6564IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6564Icon(props: _6564IconProps) {
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
        d={"M.063 0L0 .285l1.39.309.064-.285-1.39-.31z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6564Icon;
/* prettier-ignore-end */
