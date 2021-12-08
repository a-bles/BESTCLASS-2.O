// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6085IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6085Icon(props: _6085IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 2"}
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
          "M.303.095l.074.287a.877.877 0 01-.202.767l-.093-.006A.75.75 0 00.297.285 1.025 1.025 0 00.131.053l.172.042z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.192 1.185h-.02c-.034 0-.063-.004-.093-.006L0 1.172l.057-.052A.712.712 0 00.267.3.5.5 0 00.161.147L.104.077.046 0l.286.068.005.02.074.287a.922.922 0 01-.209.797l-.01.013zM.223.111a.749.749 0 01.073.095A3.155 3.155 0 00.275.124L.223.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6085Icon;
/* prettier-ignore-end */
