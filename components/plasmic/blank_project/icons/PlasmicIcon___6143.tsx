// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6143IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6143Icon(props: _6143IconProps) {
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
        d={"M5.992 1.279H0V.978h5.692V0h.3v1.279z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6143Icon;
/* prettier-ignore-end */
