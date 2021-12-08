// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6267IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6267Icon(props: _6267IconProps) {
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
          "M.285 2.334L0 2.33l.014-1.28A1.341 1.341 0 01.488.03L.531 0l.052.004c.425.035.532.522.527.803l-.009.86-.285-.003.01-.86c0-.006 0-.433-.218-.506a1.125 1.125 0 00-.307.754L.285 2.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6267Icon;
/* prettier-ignore-end */
