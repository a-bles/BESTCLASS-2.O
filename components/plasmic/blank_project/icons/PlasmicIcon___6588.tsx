// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6588IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6588Icon(props: _6588IconProps) {
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
          "M1.09 2.771l-.292-.003L.82.74a.976.976 0 01-.185.167L.592.936.54.93C.252.91.051.67 0 .291L.289.252c.014.102.062.329.225.38A1.06 1.06 0 00.827 0l.29.022-.027 2.749z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6588Icon;
/* prettier-ignore-end */
