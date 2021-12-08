// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6187IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6187Icon(props: _6187IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 8"}
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
        d={"M.195.404V7.12l-.162.115S-.04.71.033.207c.075-.5.162.044.162.197z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6187Icon;
/* prettier-ignore-end */
