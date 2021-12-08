// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6328IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6328Icon(props: _6328IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M1.243 2.137H.937V.927C.937.923.934.467.622.323.307.467.305.923.305.926v1.211H0V.927A.967.967 0 01.575.015L.622 0l.047.015a.971.971 0 01.574.913v1.209z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6328Icon;
/* prettier-ignore-end */
