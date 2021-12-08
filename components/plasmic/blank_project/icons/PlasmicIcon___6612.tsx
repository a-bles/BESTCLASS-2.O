// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6612IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6612Icon(props: _6612IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 22"}
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
          "M.188 21.399L0 21.259.217.884.32.747 2.78 0l.19.141-.218 20.374-.104.138-2.46.746zM.508.995L.295 21.062l2.167-.657L2.675.338.508.995z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6612Icon;
/* prettier-ignore-end */
