// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6516IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6516Icon(props: _6516IconProps) {
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
          "M.312 0c.004.093.01.187.013.28v.31A2.395 2.395 0 01.062.389C.024.351.02.277 0 .219.105.146.21.073.312 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6516Icon;
/* prettier-ignore-end */
