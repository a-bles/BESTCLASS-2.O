// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6108IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6108Icon(props: _6108IconProps) {
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
        d={"M.124.035H1.32l.016.044H.154L.102.035h.022z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M1.383.113H.14L0 0h1.344l.04.113z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6108Icon;
/* prettier-ignore-end */
