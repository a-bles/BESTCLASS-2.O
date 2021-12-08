// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6562IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6562Icon(props: _6562IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 6"}
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
          "M.291 5.379L0 5.376l.035-3.202.053-.11L1.544.878 4.444 0l.085.28-2.872.87L.326 2.246.291 5.379z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6562Icon;
/* prettier-ignore-end */
