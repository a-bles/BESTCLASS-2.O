// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6383IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6383Icon(props: _6383IconProps) {
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
        d={"M.223 2.613L0 2.405 2.241 0l.224.208L.223 2.613z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6383Icon;
/* prettier-ignore-end */
