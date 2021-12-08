// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6459IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6459Icon(props: _6459IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 1"}
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
        d={"M14.01.882H0V0h14.01v.882zM.306.576h13.398v-.27H.306v.27z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6459Icon;
/* prettier-ignore-end */
