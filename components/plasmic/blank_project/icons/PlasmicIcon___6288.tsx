// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6288IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6288Icon(props: _6288IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M.286 4.662H0a2.173 2.173 0 01.627-1.564l.02-1.04A1.514 1.514 0 011.61.723 1.21 1.21 0 012.094 0l.153.24a.933.933 0 00-.372.618l-.014.097-.095.022C1.008 1.148.93 2.062.93 2.073l-.022 1.16-.052.042a1.837 1.837 0 00-.57 1.387z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6288Icon;
/* prettier-ignore-end */
