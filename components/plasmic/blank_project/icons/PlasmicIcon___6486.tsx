// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6486IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6486Icon(props: _6486IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
        d={"M.566.054L.063.562.057.56C.221.389.385.216.55.046l.016.008z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.068.608L.044.592 0 .57.032.534.542 0l.024.011.019.011.038.024-.032.032-.503.507-.02.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6486Icon;
/* prettier-ignore-end */
