// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6071IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6071Icon(props: _6071IconProps) {
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
        d={"M1.47.818H.65L.545.773 0 .209.215 0l.5.518h.757l-.002.3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6071Icon;
/* prettier-ignore-end */
