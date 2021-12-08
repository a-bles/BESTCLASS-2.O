// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6427IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6427Icon(props: _6427IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.1 2.322L.035.008C.137.775.159 1.55.1 2.322z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.066 2.322L0 .008.069 0c.095.54.122 1.09.08 1.638-.007.224-.015.456-.013.684h-.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6427Icon;
/* prettier-ignore-end */
