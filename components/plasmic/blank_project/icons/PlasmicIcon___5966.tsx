// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5966IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5966Icon(props: _5966IconProps) {
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
        d={"M.754 1.862H0v-.299h.522L.94 0h.779v.299h-.55L.754 1.862z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5966Icon;
/* prettier-ignore-end */
