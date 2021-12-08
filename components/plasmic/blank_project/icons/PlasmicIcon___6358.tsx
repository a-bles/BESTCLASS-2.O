// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6358IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6358Icon(props: _6358IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
        d={"M1.507 1.441H.355L0 .077.296 0l.295 1.136h.916v.305z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6358Icon;
/* prettier-ignore-end */
