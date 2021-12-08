// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6270IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6270Icon(props: _6270IconProps) {
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
          "M.286 2.876L0 2.872l.02-1.823A1.346 1.346 0 01.495.029L.537 0l.052.004c.425.035.533.522.527.803L1.098 2.63l-.286-.003.02-1.823c0-.005 0-.433-.217-.505a1.113 1.113 0 00-.307.753L.286 2.876z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6270Icon;
/* prettier-ignore-end */
