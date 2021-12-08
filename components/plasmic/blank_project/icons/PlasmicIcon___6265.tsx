// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6265IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6265Icon(props: _6265IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
          "M1.06 5.254l-.284-.003L.822.804c0-.006 0-.434-.217-.506a1.126 1.126 0 00-.307.754L.286 2.284 0 2.28l.014-1.23A1.348 1.348 0 01.488.03L.53 0l.052.005c.426.034.532.522.527.803l-.048 4.446z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6265Icon;
/* prettier-ignore-end */
