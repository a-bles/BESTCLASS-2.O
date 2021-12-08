// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6146IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6146Icon(props: _6146IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 2"}
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
        d={"M5.99 1.276H0V0h.3v.975h5.69v.301z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6146Icon;
/* prettier-ignore-end */
