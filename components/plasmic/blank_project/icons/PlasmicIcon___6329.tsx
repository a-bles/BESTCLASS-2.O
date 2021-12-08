// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6329IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6329Icon(props: _6329IconProps) {
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
          "M1.243 2.72H.938V.93C.938.924.933.468.622.324.307.467.305.924.305.928V2.72H0V.93A.967.967 0 01.575.016L.622 0 .67.016a.969.969 0 01.573.913V2.72z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6329Icon;
/* prettier-ignore-end */
