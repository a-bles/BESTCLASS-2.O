// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6025IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6025Icon(props: _6025IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M.298 4.423H0A4.428 4.428 0 014.423 0v.3A4.129 4.129 0 00.298 4.422z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6025Icon;
/* prettier-ignore-end */
