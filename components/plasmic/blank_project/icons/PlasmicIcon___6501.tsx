// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6501IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6501Icon(props: _6501IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
        d={"M1.289.035H.066L.05.08h1.207l.054-.045h-.022z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M1.27.116H0L.04 0h1.372L1.27.116z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6501Icon;
/* prettier-ignore-end */
