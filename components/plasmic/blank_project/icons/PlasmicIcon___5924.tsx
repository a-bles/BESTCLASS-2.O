// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5924IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5924Icon(props: _5924IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 1"}
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
        d={"M11.118.925H0V0h.3v.627h10.52V0h.299v.925z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5924Icon;
/* prettier-ignore-end */
