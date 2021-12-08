// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6266IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6266Icon(props: _6266IconProps) {
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
          "M1.09 2.036l-.285-.004.013-1.23C.818.797.818.368.6.296a1.114 1.114 0 00-.306.754l-.01.86H0l.008-.86A1.351 1.351 0 01.485.03L.526 0 .58.005c.425.034.531.522.527.803L1.09 2.036z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6266Icon;
/* prettier-ignore-end */
