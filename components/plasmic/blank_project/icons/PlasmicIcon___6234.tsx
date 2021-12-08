// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6234IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6234Icon(props: _6234IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 24"}
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
          "M1.918 23.664l-.286-.003.231-21.637L0 .204.2 0l1.95 1.904-.232 21.76z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6234Icon;
/* prettier-ignore-end */
