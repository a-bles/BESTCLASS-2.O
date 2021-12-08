// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6194IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6194Icon(props: _6194IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M2.433 1.75c-.053-.012-.121-.052-.157-.034-.361.186-.727.366-1.07.58-.3.174-.577.387-.82.634a.926.926 0 00-.157 1.1c-.439-.452-.29-.783.818-1.87-.046-.064-.092-.13-.14-.194l-.004.006.53.073a6.356 6.356 0 00-.522-.398A1.01 1.01 0 01.967 0L.99.025C.96.36.938.695.898 1.028c-.032.278-.045.567.272.663a1.204 1.204 0 00.956.041c-.345-.15-.735-.15-.894-.47h.95c.02.025.089.117.156.209.028.095.056.19.083.287l.012-.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6194Icon;
/* prettier-ignore-end */
