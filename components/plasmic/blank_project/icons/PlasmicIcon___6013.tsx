// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6013IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6013Icon(props: _6013IconProps) {
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
        d={"M.185 0L0 .233l.383.303.184-.234L.185 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6013Icon;
/* prettier-ignore-end */
