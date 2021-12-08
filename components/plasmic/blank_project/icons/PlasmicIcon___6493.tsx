// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6493IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6493Icon(props: _6493IconProps) {
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
        d={"M.06 2.17V.04H.035v2.137L.06 2.17z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M0 2.226V.008L.096 0v2.198l-.028.006a.159.159 0 00-.02.007L0 2.226z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6493Icon;
/* prettier-ignore-end */
