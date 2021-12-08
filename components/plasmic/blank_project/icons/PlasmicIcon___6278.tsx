// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6278IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6278Icon(props: _6278IconProps) {
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
          "M1.067 2.708H.78L.803.723a.924.924 0 01-.181.163L.58.915.527.91C.247.887.05.653 0 .284L.282.246c.014.1.062.323.221.372C.673.453.781.235.81 0l.284.021-.026 2.687z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6278Icon;
/* prettier-ignore-end */
