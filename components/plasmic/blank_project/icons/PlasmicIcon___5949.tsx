// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5949IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5949Icon(props: _5949IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 1"}
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
        d={"M5.897.714H0V.415h5.786L6.271 0l.193.227-.567.487z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5949Icon;
/* prettier-ignore-end */
