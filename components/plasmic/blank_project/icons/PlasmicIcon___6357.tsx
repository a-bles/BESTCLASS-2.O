// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6357IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6357Icon(props: _6357IconProps) {
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
        d={"M1.326 1.441h-.97L0 .077.295 0l.296 1.136h.734l.001.305z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6357Icon;
/* prettier-ignore-end */
