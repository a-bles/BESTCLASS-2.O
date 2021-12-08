// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6484IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6484Icon(props: _6484IconProps) {
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
          "M.874.564c-.287.19-.48.22-.65.083C.074.528.053.368.153.131A.32.32 0 00.06.505a.381.381 0 00.354.27.492.492 0 00.46-.211z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.459.811H.412A.413.413 0 01.026.517.357.357 0 01.13.107L.248 0 .186.147C.092.37.11.512.246.622.4.747.575.72.852.536l.16-.107-.11.156A.516.516 0 01.46.811z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6484Icon;
/* prettier-ignore-end */
