// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6172IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6172Icon(props: _6172IconProps) {
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
        d={"M.244.022S.117.405.224.445c0 0-.342-.109-.099-.423"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.213.477A.275.275 0 01.097 0l.056.042a.261.261 0 00-.074.23.19.19 0 00.069.093A1.11 1.11 0 01.21.009l.066.022c-.06.185-.08.366-.04.38L.213.477z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6172Icon;
/* prettier-ignore-end */
