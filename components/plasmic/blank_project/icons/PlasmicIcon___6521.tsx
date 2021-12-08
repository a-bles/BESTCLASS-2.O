// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6521IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6521Icon(props: _6521IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 19"}
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
          "M1.962 18.809l-.293-.003.176-16.489-.34-.587-.613.187L.535.37l-.45.136L0 .226.747 0l.358 1.547.537-.163.495.86v.04l-.175 16.525z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6521Icon;
/* prettier-ignore-end */
