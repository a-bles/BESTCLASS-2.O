// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5947IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5947Icon(props: _5947IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 2"}
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
        d={"M13.035 1.277H0V0h.3v.978h12.436V0h.3l-.001 1.277z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5947Icon;
/* prettier-ignore-end */
