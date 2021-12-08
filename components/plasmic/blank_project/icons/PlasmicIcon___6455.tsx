// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6455IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6455Icon(props: _6455IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 1"}
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
        d={"M10.729.053H.039V.036h10.69v.017z"}
        fill={"currentColor"}
      ></path>

      <path d={"M10.762 0H0v.088h10.762V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _6455Icon;
/* prettier-ignore-end */
