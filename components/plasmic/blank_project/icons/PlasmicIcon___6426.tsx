// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6426IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6426Icon(props: _6426IconProps) {
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
        d={"M.034.01A8.24 8.24 0 01.19 2.526C.104 1.689.257.838.034.01z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.154 2.529a8.907 8.907 0 01-.028-.98A5.701 5.701 0 000 .02L.068 0C.234.644.29 1.312.235 1.974c-.004.18-.01.368-.01.552l-.071.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6426Icon;
/* prettier-ignore-end */
