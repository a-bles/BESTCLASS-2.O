// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6338IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6338Icon(props: _6338IconProps) {
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
          "M1.243 2.138H.938V.928C.938.924.933.468.622.324.307.468.305.924.305.928v1.21H0V.928A.97.97 0 01.575.015L.622 0 .67.015a.97.97 0 01.573.914v1.21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6338Icon;
/* prettier-ignore-end */
