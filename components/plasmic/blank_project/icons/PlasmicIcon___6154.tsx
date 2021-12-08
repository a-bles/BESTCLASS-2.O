// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6154IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6154Icon(props: _6154IconProps) {
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
        d={"M.215.01a8.005 8.005 0 00-.151 2.46C.147 1.653-.002.821.214.01z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.1 2.475l-.07-.003c0-.18-.005-.363-.01-.54A5.824 5.824 0 01.183 0L.25.019C.141.51.1 1.014.126 1.516c.008.32-.001.64-.027.959z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6154Icon;
/* prettier-ignore-end */
