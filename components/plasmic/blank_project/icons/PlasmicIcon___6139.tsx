// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6139IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6139Icon(props: _6139IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 1"}
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
        d={"M5.897.714H0V.415h5.788L6.27 0l.194.227-.568.487z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6139Icon;
/* prettier-ignore-end */
