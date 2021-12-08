// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6322IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6322Icon(props: _6322IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 56"}
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
          "M18.658 55.28H0v-.306h18.35l-.282-52.36-.419-.711h-.682L16.543.305h-.562V0h.796l.427 1.598h.622l.549.932v.04l.283 52.71z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6322Icon;
/* prettier-ignore-end */
