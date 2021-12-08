// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6430IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6430Icon(props: _6430IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M.138.565c.287.19.48.22.652.083.147-.12.17-.28.07-.516a.32.32 0 01.093.373.381.381 0 01-.355.272.494.494 0 01-.46-.212z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.554.812A.515.515 0 01.11.585L0 .43l.16.107c.278.184.453.21.607.086C.903.512.922.37.827.147L.767 0l.118.107a.357.357 0 01.103.41.414.414 0 01-.433.295z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6430Icon;
/* prettier-ignore-end */
