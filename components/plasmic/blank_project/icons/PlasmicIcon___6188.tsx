// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6188IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6188Icon(props: _6188IconProps) {
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
        d={
          "M.195.404v7.024l-.162-.192S-.042.71.033.207c.076-.5.162.044.162.197z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6188Icon;
/* prettier-ignore-end */
