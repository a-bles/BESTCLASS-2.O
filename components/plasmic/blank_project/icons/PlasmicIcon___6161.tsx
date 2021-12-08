// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6161IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6161Icon(props: _6161IconProps) {
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
        d={"M.303 2.02C.269 1.348.477.641.03.02c.331.637.16 1.336.272 2z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.269 2.026a4.88 4.88 0 01-.049-.73A2.715 2.715 0 000 .035L.059 0c.267.441.369.963.287 1.472-.008.18-.016.366-.008.546l-.07.008zM.257.662c.019.156.03.313.031.47a2.72 2.72 0 00-.031-.47z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6161Icon;
/* prettier-ignore-end */
