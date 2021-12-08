// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6489IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6489Icon(props: _6489IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.1 2.357A6.2 6.2 0 01.492.072C.198.206-.09 1.922.1 2.357z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.124 2.503l-.057-.132C-.138 1.903.165.184.478.04L.565 0l-.04.088a5.204 5.204 0 00-.369 1.93l-.02.342-.012.143zM.338.372a4.895 4.895 0 00-.255 1.724c0-.027.003-.053.005-.082C.095 1.458.178.905.335.371h.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6489Icon;
/* prettier-ignore-end */
