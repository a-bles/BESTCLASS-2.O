// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6440IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6440Icon(props: _6440IconProps) {
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
        d={"M.214.346C.161.9.107 1.476.054 2.015A4.576 4.576 0 01.214.346z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.088 2.019h-.07A4.621 4.621 0 01.18.338L.284 0 .088 2.019zM.123.916c-.023.155-.038.31-.045.467L.123.916z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6440Icon;
/* prettier-ignore-end */
