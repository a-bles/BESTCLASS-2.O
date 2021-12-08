// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6281IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6281Icon(props: _6281IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
          "M.286 5.512H0L.047 1.05A1.352 1.352 0 01.524.029L.566 0l.052.004c.424.035.53.522.527.803L1.097 5.27H.812L.859.806C.859.8.859.372.641.3a1.127 1.127 0 00-.307.753L.286 5.512z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6281Icon;
/* prettier-ignore-end */
