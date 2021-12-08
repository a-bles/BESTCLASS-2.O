// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6056IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6056Icon(props: _6056IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 20"}
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
          "M2.88 19.469H.15l-.15-.15V.15L.15 0h2.73l.149.15v19.17l-.149.149zm-2.58-.3h2.43V.3H.3v18.87z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6056Icon;
/* prettier-ignore-end */
