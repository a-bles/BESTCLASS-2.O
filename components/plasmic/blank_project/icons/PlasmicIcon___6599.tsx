// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6599IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6599Icon(props: _6599IconProps) {
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
          "M.292 4.764H0a2.22 2.22 0 01.64-1.599l.02-1.062A1.547 1.547 0 011.647.738C1.714.439 1.89.176 2.14 0l.156.245a.954.954 0 00-.38.632l-.014.098-.098.023c-.774.175-.853 1.11-.853 1.12L.928 3.303l-.054.043a1.877 1.877 0 00-.582 1.418z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6599Icon;
/* prettier-ignore-end */
