// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6165IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6165Icon(props: _6165IconProps) {
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
        d={"M.393.053a.476.476 0 00-.3.706.596.596 0 01.296-.71l.004.004z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.062.775A.58.58 0 01.053.271.47.47 0 01.367.025L.374.02.401 0l.053.072-.05.015H.398a.549.549 0 00-.267.66L.062.775z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6165Icon;
/* prettier-ignore-end */
