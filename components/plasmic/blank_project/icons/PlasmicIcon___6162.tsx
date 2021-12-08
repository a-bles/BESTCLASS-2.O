// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6162IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6162Icon(props: _6162IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
        d={"M.03.018c.333.603.174 1.269.251 1.905C.247 1.282.419.614.031.018z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.247 1.926A5.418 5.418 0 01.22 1.3 2.527 2.527 0 000 .036L.06 0c.233.428.324.92.258 1.402-.005.172-.012.348 0 .522l-.071.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6162Icon;
/* prettier-ignore-end */
