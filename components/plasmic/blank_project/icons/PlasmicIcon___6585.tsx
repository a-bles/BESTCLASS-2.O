// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6585IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6585Icon(props: _6585IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
        d={
          "M1.09 2.767H.8L.82.74a.973.973 0 01-.185.166l-.043.03L.54.931C.253.908.051.669 0 .292l.29-.04c.013.102.062.33.225.38C.688.463.799.24.828 0l.29.022-.027 2.745z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6585Icon;
/* prettier-ignore-end */
