// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6624IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6624Icon(props: _6624IconProps) {
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
          "M.188 21.4L0 21.26.217.886.321.747 2.78 0l.188.141-.217 20.374-.103.138-2.461.747zM.508.995l-.214 20.07 2.168-.659L2.675.338.508.995z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6624Icon;
/* prettier-ignore-end */
