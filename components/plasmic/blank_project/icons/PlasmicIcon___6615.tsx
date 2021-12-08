// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6615IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6615Icon(props: _6615IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 20"}
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
          "M.52 19.723l-.483-.545L0 19.08.203 0l.291.003-.202 19.024.446.503-.217.193z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6615Icon;
/* prettier-ignore-end */
