// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6020IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6020Icon(props: _6020IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 9"}
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
          "M.302 8.597h-.3V3.933a1.496 1.496 0 01.692-1.355l.01-.967A1.1 1.1 0 011.796.556.883.883 0 012.359 0l.083.287a.574.574 0 00-.382.446l-.022.132-.135-.009A.82.82 0 001 1.624L.99 2.767l-.09.039a1.17 1.17 0 00-.6 1.127l.001 4.664z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6020Icon;
/* prettier-ignore-end */
