// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6435IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6435Icon(props: _6435IconProps) {
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
        d={"M.466 2.356A6.216 6.216 0 00.074.072c.291.134.583 1.85.392 2.284z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.44 2.503L.43 2.36c-.008-.115-.014-.23-.02-.342A5.2 5.2 0 00.04.088L0 0l.086.04C.4.183.703 1.903.498 2.371l-.057.132zM.23.37c.157.534.241 1.086.25 1.642l.004.082A4.878 4.878 0 00.231.37z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6435Icon;
/* prettier-ignore-end */
