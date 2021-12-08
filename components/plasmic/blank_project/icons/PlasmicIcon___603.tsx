// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _603IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _603Icon(props: _603IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 14"}
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
          "M.75 0a.74.74 0 01.53.22l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06-1.06l5.47-5.47L.22 1.28A.75.75 0 01.75 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.75 0a.74.74 0 01.53.22l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06-1.06l5.47-5.47L.22 1.28A.75.75 0 01.75 0z"
        }
        fill={"currentColor"}
        fillOpacity={".5"}
      ></path>

      <path
        d={
          "M.75 0a.74.74 0 01.53.22l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06-1.06l5.47-5.47L.22 1.28A.75.75 0 01.75 0z"
        }
        fill={"currentColor"}
        fillOpacity={".2"}
      ></path>
    </svg>
  );
}

export default _603Icon;
/* prettier-ignore-end */
