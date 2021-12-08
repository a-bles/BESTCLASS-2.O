// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6462IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6462Icon(props: _6462IconProps) {
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
        d={"M11.564.787h-.306v-.48H.306v.48H0V0h11.563v.787z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6462Icon;
/* prettier-ignore-end */
