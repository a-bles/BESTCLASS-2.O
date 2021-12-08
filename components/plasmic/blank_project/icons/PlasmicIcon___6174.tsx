// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6174IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6174Icon(props: _6174IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M1.704.032H.052a.123.123 0 00.104.071c.076.006 1.5 0 1.5 0l.048-.071z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.583.14H.15A.157.157 0 01.019.048L0 0h1.772l-.105.14H1.65c-.036-.002-.636 0-1.067 0zM.147.067h.006c.062.005.986 0 1.48 0H.148z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6174Icon;
/* prettier-ignore-end */
