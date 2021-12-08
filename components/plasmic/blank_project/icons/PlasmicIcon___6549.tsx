// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6549IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6549Icon(props: _6549IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 27"}
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
          "M.291 26.454L0 26.451.236 4.236l2.001-3.1L2.25 0l.292.003-.012 1.22L.527 4.324l-.236 22.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6549Icon;
/* prettier-ignore-end */
