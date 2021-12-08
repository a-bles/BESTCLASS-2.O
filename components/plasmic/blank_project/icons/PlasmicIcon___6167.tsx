// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6167IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6167Icon(props: _6167IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.06 2.124V.04H.034v2.09l.024-.006z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M0 2.179V.008L.093 0v2.151l-.026.006a.155.155 0 00-.02.006L0 2.18z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6167Icon;
/* prettier-ignore-end */
