// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6618IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6618Icon(props: _6618IconProps) {
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
          "M.188 21.399L0 21.259.217.884.321.747 2.78 0l.188.141-.217 20.373-.103.138-2.46.747zM.508.995L.296 21.062l2.169-.657L2.677.338.51.995z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6618Icon;
/* prettier-ignore-end */
