// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6436IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6436Icon(props: _6436IconProps) {
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
        d={"M.036.016C.308.706.426 1.45.38 2.19A7.467 7.467 0 00.036.016z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.344 2.19L.32 1.862A6.148 6.148 0 000 .028L.065 0a4.95 4.95 0 01.347 2.114v.073l-.068.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6436Icon;
/* prettier-ignore-end */
