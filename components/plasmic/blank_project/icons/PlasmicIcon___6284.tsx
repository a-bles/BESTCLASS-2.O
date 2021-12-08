// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6284IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6284Icon(props: _6284IconProps) {
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
          "M.286 2.333L0 2.33l.014-1.28A1.344 1.344 0 01.49.029L.531 0l.052.004c.425.035.53.522.528.802l-.01.86-.285-.003.01-.86c0-.005 0-.433-.218-.506a1.114 1.114 0 00-.307.754L.286 2.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6284Icon;
/* prettier-ignore-end */
