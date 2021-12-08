// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _5976IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _5976Icon(props: _5976IconProps) {
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
          "M1.218 2.091h-.3V.908C.918.903.914.457.61.316.302.456.3.902.3.907v1.185H0V.908A.948.948 0 01.562.016L.61 0l.045.016a.95.95 0 01.563.893v1.182z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _5976Icon;
/* prettier-ignore-end */
