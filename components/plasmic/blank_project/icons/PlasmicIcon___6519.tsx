// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6519IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6519Icon(props: _6519IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 19"}
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
          "M1.96 18.814l-.29-.003.175-16.489-.34-.59-.614.186L.535.371l-.45.136L0 .227.747 0l.356 1.547.538-.16.496.86v.04L1.96 18.814z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6519Icon;
/* prettier-ignore-end */
