// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6566IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6566Icon(props: _6566IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M.292 4.906L0 4.903l.035-3.201.054-.112L1.545.406 2.874.003 2.949 0l1.387.31-.063.284L2.919.293 1.655.677.325 1.773.291 4.906z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6566Icon;
/* prettier-ignore-end */
