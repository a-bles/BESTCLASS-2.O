// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5993IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5993Icon(props: _5993IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
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
          "M.3 2.612H0V.025L.298 0A.337.337 0 10.92 0l.295.048a.892.892 0 01-.56.72L.61.785.562.769a.731.731 0 01-.26-.151L.298 2.612z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5993Icon;
/* prettier-ignore-end */
