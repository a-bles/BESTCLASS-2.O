// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6319IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6319Icon(props: _6319IconProps) {
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
          "M.51 19.302l-.474-.533L0 18.672.2 0l.285.003-.2 18.617.438.492-.213.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6319Icon;
/* prettier-ignore-end */
