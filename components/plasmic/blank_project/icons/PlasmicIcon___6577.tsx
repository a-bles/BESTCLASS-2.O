// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6577IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6577Icon(props: _6577IconProps) {
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
          "M1.114 2.08l-.291-.003L.836.819c0-.005 0-.443-.222-.516C.416.51.304.786.3 1.073l-.01.878H0l.008-.878A1.38 1.38 0 01.495.03L.538 0 .59.005c.435.035.543.533.54.82L1.113 2.08z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6577Icon;
/* prettier-ignore-end */
