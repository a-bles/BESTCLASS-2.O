// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6568IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6568Icon(props: _6568IconProps) {
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
          "M.291 2.332L0 2.33l.014-1.258A1.376 1.376 0 01.499.03L.543 0l.053.004c.434.035.543.534.539.821l-.013 1.257L.83 2.08.843.82c0-.005 0-.442-.222-.516-.197.208-.31.483-.314.77L.291 2.332z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6568Icon;
/* prettier-ignore-end */
