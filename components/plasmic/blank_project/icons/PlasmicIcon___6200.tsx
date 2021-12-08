// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6200IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6200Icon(props: _6200IconProps) {
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
        d={
          "M.305 0l.014.274v.303A2.344 2.344 0 01.06.381C.023.343.02.27 0 .214.102.144.205.072.305 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6200Icon;
/* prettier-ignore-end */
