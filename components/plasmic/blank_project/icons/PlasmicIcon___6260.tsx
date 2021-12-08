// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6260IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6260Icon(props: _6260IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
          "M1.031 5.888H.746L.802.725A.955.955 0 01.62.888L.578.916.528.912C.249.889.05.654 0 .285L.283.248c.014.1.062.321.221.37C.674.455.782.236.809 0l.286.022-.064 5.866z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6260Icon;
/* prettier-ignore-end */
