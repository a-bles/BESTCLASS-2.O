// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6365IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6365Icon(props: _6365IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.377.755a.377.377 0 110-.755.377.377 0 010 .755zm0-.45a.072.072 0 00-.072.072c0 .08.144.08.144 0A.072.072 0 00.377.305z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6365Icon;
/* prettier-ignore-end */
