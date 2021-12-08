// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6312IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6312Icon(props: _6312IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 20"}
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
          "M.51 19.302l-.474-.534L0 18.672.2 0l.285.003L.286 18.62l.437.492-.213.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6312Icon;
/* prettier-ignore-end */
