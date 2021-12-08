// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6368IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6368Icon(props: _6368IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M1.973 3.233a1.044 1.044 0 00-.398-.366l-.09-.04-.014-1.178A.826.826 0 00.55.875l-.138.01L.391.747A.587.587 0 000 .293L.085 0A.904.904 0 01.66.567a1.12 1.12 0 011.114 1.067l.012 1c.177.108.329.255.442.43l-.256.17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6368Icon;
/* prettier-ignore-end */
