// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6578IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6578Icon(props: _6578IconProps) {
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
          "M.291 2.385L0 2.38l.014-1.308A1.37 1.37 0 01.5.03L.542 0l.053.004c.435.035.544.534.54.821l-.01.878L.834 1.7l.01-.88C.843.817.843.38.62.306a1.15 1.15 0 00-.314.77L.29 2.386z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6578Icon;
/* prettier-ignore-end */
