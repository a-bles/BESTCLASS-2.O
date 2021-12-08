// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6130IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6130Icon(props: _6130IconProps) {
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
        d={"M11.12.925H0V0h.3v.627h10.52V0h.3v.925z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6130Icon;
/* prettier-ignore-end */
