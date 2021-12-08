// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6101IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6101Icon(props: _6101IconProps) {
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
        d={"M.21.339C.156.88.104 1.445.052 1.971A4.478 4.478 0 01.209.34z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.086 1.975H.017A4.522 4.522 0 01.177.331L.276 0l-.19 1.975zM.121.897a4.484 4.484 0 00-.044.457L.12.897z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6101Icon;
/* prettier-ignore-end */
