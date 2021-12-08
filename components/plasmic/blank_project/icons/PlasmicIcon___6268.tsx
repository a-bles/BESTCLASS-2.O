// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6268IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6268Icon(props: _6268IconProps) {
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
          "M.286 2.28H0l.014-1.231A1.349 1.349 0 01.489.029L.531 0l.052.004c.424.034.53.522.527.802l-.013 1.231-.285-.003.012-1.23c0-.006 0-.434-.217-.506a1.127 1.127 0 00-.307.753L.286 2.28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6268Icon;
/* prettier-ignore-end */
