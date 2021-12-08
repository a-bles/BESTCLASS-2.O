// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6601IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6601Icon(props: _6601IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 9"}
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
          "M2.084 8.52l-.292-.003.053-4.955c.008-.887-.472-1.007-.493-1.013l-.114-.026V1.286A.787.787 0 00.983.747a.539.539 0 00-.49 0L.32.813.296.631C.25.317.026.293 0 .291L.012 0a.61.61 0 01.533.427.737.737 0 01.598.076 1.077 1.077 0 01.387.773v1.025c.208.094.617.39.608 1.26l-.054 4.96z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6601Icon;
/* prettier-ignore-end */
