// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6336IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6336Icon(props: _6336IconProps) {
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
          "M.305 2.138H0V.928A.968.968 0 01.574.015L.622 0l.047.015a.971.971 0 01.574.914v.844H.937V.928C.937.924.933.468.622.323.306.468.306.923.306.927v1.211z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6336Icon;
/* prettier-ignore-end */
