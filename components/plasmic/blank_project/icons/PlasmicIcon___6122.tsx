// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6122IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6122Icon(props: _6122IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 7"}
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
          "M0 1.916V6.04l.289.29s.028-3.932 0-4.439C.123-1.137.086-.075 0 1.916z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6122Icon;
/* prettier-ignore-end */
