// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6532IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6532Icon(props: _6532IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
        d={"M.308 1.43L0 .065.285 0l.238 1.06.28-.085.086.279-.581.177z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6532Icon;
/* prettier-ignore-end */
