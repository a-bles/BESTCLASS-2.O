// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6554IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6554Icon(props: _6554IconProps) {
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
        d={"M.291 2.432L0 2.429.026 0l.292.003-.027 2.429z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6554Icon;
/* prettier-ignore-end */
