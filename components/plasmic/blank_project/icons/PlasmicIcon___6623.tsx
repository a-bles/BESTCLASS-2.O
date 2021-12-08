// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6623IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6623Icon(props: _6623IconProps) {
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
        d={"M1.478 0L0 .448l.085.279L1.562.279l-.084-.28z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6623Icon;
/* prettier-ignore-end */
