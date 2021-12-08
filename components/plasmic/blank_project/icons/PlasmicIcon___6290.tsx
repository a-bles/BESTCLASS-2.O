// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6290IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6290Icon(props: _6290IconProps) {
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
          "M2.04 8.339l-.286-.004.052-4.849c.008-.868-.462-.985-.483-.992l-.111-.025V1.258a.77.77 0 00-.25-.526.527.527 0 00-.48 0L.314.796.289.618C.246.31.025.287 0 .285L.011 0a.596.596 0 01.523.418.721.721 0 01.585.074 1.054 1.054 0 01.378.757v1.003c.204.092.604.382.595 1.233L2.04 8.339z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6290Icon;
/* prettier-ignore-end */
