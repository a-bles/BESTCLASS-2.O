// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6189IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6189Icon(props: _6189IconProps) {
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
          "M.302 1.916V6.04l-.29.29s-.027-3.932 0-4.439c.166-3.029.205-1.967.29.024z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6189Icon;
/* prettier-ignore-end */
