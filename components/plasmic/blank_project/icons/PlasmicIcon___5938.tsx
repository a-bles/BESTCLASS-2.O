// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5938IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5938Icon(props: _5938IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 26"}
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
          "M20.802.317C13.842 3.701 2.37 11.285.302 25.145L0 25.1C2.096 11.047 13.752 3.39 20.76 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5938Icon;
/* prettier-ignore-end */
