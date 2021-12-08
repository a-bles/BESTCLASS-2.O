// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6602IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6602Icon(props: _6602IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M1.634 2.756a.544.544 0 00-.28-.206l-.115-.026V1.286A.787.787 0 00.984.747a.539.539 0 00-.49 0L.322.814.296.632C.253.316.026.293 0 .292L.012 0a.613.613 0 01.534.427.737.737 0 01.598.076 1.076 1.076 0 01.386.773v1.025a.883.883 0 01.337.273l-.233.182z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6602Icon;
/* prettier-ignore-end */
