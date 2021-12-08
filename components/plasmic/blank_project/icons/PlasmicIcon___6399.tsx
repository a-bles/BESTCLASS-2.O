// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6399IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6399Icon(props: _6399IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 4"}
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
          "M.305 3.938H0V.858l.09-.14L1.738 0l1.569.013L4.89.72l-.124.279L3.211.304h-1.44L.306.956v2.982z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6399Icon;
/* prettier-ignore-end */
