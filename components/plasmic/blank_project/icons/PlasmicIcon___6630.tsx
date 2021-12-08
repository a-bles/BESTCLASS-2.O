// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6630IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6630Icon(props: _6630IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 72"}
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
          "M.291 71.122L0 71.118.925.142 1.094 0c.596.1.623.121.653.145L1.661.26 1.6.395a5.412 5.412 0 00-.387-.078L.291 71.122z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6630Icon;
/* prettier-ignore-end */
