// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6398IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6398Icon(props: _6398IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 1"}
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
        d={"M4.51.999L2.955.305H0V0l3.049.013L4.634.72 4.51 1z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6398Icon;
/* prettier-ignore-end */
