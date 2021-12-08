// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6456IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6456Icon(props: _6456IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M.79.13s1.247.143 2.254 2.283h-.06S1.974.48.714.18L.115.099a.79.79 0 01.675.03z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.1 2.447h-.137l-.01-.019C2.942 2.41 1.932.508.704.213L0 .118.1.065a.82.82 0 01.701.029c.107.014 1.297.223 2.274 2.301l.025.052zM.822.171c.937.29 1.71 1.412 2.033 1.944C1.998.498 1.019.213.822.171zM.29.085l.43.059.037.01a.816.816 0 00-.47-.07H.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6456Icon;
/* prettier-ignore-end */
