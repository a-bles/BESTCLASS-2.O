// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6170IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6170Icon(props: _6170IconProps) {
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
        d={"M.337.035H.035l.01.215h.292V.035z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.371.285h-.36L.008.226C.008.161.002.103 0 .037V0h.373L.371.285zM.078.216h.224V.07H.071C.073.12.076.166.08.216H.078z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6170Icon;
/* prettier-ignore-end */
