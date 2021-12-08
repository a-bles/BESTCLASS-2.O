// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6163IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6163Icon(props: _6163IconProps) {
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
        d={
          "M.098 2.307A6.067 6.067 0 01.482.071C.194.202-.088 1.882.098 2.307z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.122 2.45l-.056-.13C-.135 1.864.16.18.468.04L.553 0l-.04.086a5.093 5.093 0 00-.36 1.889l-.02.334-.011.14zM.33.364a4.79 4.79 0 00-.249 1.687c0-.026.003-.052.005-.08A6.013 6.013 0 01.328.363L.33.364z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6163Icon;
/* prettier-ignore-end */
