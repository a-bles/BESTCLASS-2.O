// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6166IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6166Icon(props: _6166IconProps) {
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
        d={"M.052 1.98L.221.132A5.472 5.472 0 00.052 1.98z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.065 2.213l-.048-.228A5.48 5.48 0 01.192.111L.267 0 .065 2.213zM.141.622a8.814 8.814 0 00-.074.795L.141.622z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6166Icon;
/* prettier-ignore-end */
