// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6504IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6504Icon(props: _6504IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 8"}
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
        d={"M.2.413V7.59l-.166-.196S-.043.724.034.212C.111-.3.2.257.2.412z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6504Icon;
/* prettier-ignore-end */
