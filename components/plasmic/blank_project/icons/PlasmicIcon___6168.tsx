// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6168IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6168Icon(props: _6168IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
        d={"M.065.34c.052.541.108 1.105.16 1.632A4.477 4.477 0 00.065.339z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.192 1.976L0 0l.1.33c.155.535.21 1.093.16 1.647H.193zM.156.897l.044.457A4.244 4.244 0 00.155.896l.001.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6168Icon;
/* prettier-ignore-end */
