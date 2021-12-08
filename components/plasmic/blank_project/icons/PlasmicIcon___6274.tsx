// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6274IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6274Icon(props: _6274IconProps) {
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
          "M1.067 2.708H.782L.804.724a.953.953 0 01-.182.162l-.041.03L.529.911C.248.889.05.654 0 .285L.284.246c.012.1.06.323.22.373C.674.453.781.235.81 0l.284.022-.027 2.686z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6274Icon;
/* prettier-ignore-end */
