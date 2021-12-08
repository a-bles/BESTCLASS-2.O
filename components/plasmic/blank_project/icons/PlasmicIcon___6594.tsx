// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6594IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6594Icon(props: _6594IconProps) {
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
          "M1.114 2.082L.823 2.08.836.822c0-.005 0-.443-.222-.517a1.155 1.155 0 00-.314.77l-.009.879L0 1.95l.009-.877A1.377 1.377 0 01.495.029L.538 0l.05.004c.435.035.544.534.54.821l-.014 1.257z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6594Icon;
/* prettier-ignore-end */
