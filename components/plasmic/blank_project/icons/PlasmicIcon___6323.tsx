// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6323IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6323Icon(props: _6323IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 70"}
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
          "M.285 69.602L0 69.598.905.138 1.07 0c.584.099.61.119.64.142l-.085.113-.057.131a5.297 5.297 0 00-.38-.076L.286 69.602z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6323Icon;
/* prettier-ignore-end */
