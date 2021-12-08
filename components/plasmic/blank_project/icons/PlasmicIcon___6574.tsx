// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6574IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6574Icon(props: _6574IconProps) {
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
        d={
          "M.592.934L.54.93C.25.907.049.666 0 .29L.289.251c.01.08.053.326.225.38C.687.461.797.24.827 0l.288.042a1.28 1.28 0 01-.483.865l-.04.027z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6574Icon;
/* prettier-ignore-end */
