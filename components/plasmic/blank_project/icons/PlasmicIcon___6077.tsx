// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6077IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6077Icon(props: _6077IconProps) {
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
        d={"M1.472.818h-.82L.546.773 0 .209.215 0l.5.518h.757v.3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6077Icon;
/* prettier-ignore-end */
