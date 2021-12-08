// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6275IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6275Icon(props: _6275IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M1.065 2.712L.78 2.71.8.725a.945.945 0 01-.18.162L.577.916.528.912C.246.889.05.654 0 .285L.282.246c.015.1.062.323.222.373C.674.454.782.235.809 0l.286.022-.03 2.69z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6275Icon;
/* prettier-ignore-end */
