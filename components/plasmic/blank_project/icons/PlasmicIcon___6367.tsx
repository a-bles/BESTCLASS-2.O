// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6367IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6367Icon(props: _6367IconProps) {
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
          "M2.494 4.019h-.306a1.196 1.196 0 00-.613-1.153l-.09-.04L1.47 1.65A.826.826 0 00.55.875L.413.884.391.748A.587.587 0 000 .293L.085 0A.907.907 0 01.66.568a1.12 1.12 0 011.114 1.067l.012.998a1.528 1.528 0 01.707 1.386z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6367Icon;
/* prettier-ignore-end */
