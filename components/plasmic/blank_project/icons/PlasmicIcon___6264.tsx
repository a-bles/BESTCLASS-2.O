// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6264IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6264Icon(props: _6264IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 5"}
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
          "M1.092 4.302H.807L.844.803c0-.005 0-.433-.218-.505a1.123 1.123 0 00-.306.753L.286 4.297 0 4.293l.036-3.244A1.347 1.347 0 01.51.029L.552 0l.05.003c.425.035.532.522.527.803l-.037 3.496z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6264Icon;
/* prettier-ignore-end */
