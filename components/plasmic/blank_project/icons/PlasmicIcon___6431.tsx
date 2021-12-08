// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6431IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6431Icon(props: _6431IconProps) {
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
        d={"M.169.102L.187.27.06.037h.573V.06L.169.102z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.24.445L.157.285.038.068 0 0h.668v.053L.67.089.439.111.208.133c0 .014 0 .03.004.05l.029.262zM.12.072a.165.165 0 01.012.023V.072H.12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6431Icon;
/* prettier-ignore-end */
