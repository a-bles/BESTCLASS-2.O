// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6065IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6065Icon(props: _6065IconProps) {
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
        d={"M1.473.818h-.82L.545.773 0 .209.215 0l.5.518h.758v.3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6065Icon;
/* prettier-ignore-end */
