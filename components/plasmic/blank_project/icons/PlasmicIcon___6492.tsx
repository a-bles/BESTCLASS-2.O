// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6492IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6492Icon(props: _6492IconProps) {
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
        d={"M.054 2.023C.11 1.397.17.733.226.135a5.591 5.591 0 00-.172 1.888z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.067 2.261l-.05-.232A5.6 5.6 0 01.198.113L.272 0 .067 2.261zM.144.636a9.007 9.007 0 00-.075.812L.144.636z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6492Icon;
/* prettier-ignore-end */
