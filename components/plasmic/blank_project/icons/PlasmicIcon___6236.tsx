// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6236IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6236Icon(props: _6236IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
        d={"M.182 0L0 .22l2.154 1.787.183-.22L.182 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6236Icon;
/* prettier-ignore-end */
