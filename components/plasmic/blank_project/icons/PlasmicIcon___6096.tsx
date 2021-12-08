// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6096IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6096Icon(props: _6096IconProps) {
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
        d={"M.457 2.307A6.083 6.083 0 00.073.07c.285.13.57 1.81.384 2.236z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.431 2.45l-.01-.14L.4 1.974A5.089 5.089 0 00.04.086L0 0l.085.04c.307.14.603 1.823.402 2.28l-.056.13zM.226.362C.379.886.46 1.426.469 1.97l.005.08A4.774 4.774 0 00.226.363z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6096Icon;
/* prettier-ignore-end */
