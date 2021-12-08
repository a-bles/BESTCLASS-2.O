// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6457IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6457Icon(props: _6457IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 25"}
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
          "M.058 0c7.056 3.536 18.095 11.152 20.13 24.788l-.302.045C17.879 11.375 7.001 3.833 0 .31"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6457Icon;
/* prettier-ignore-end */
