// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6572IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6572Icon(props: _6572IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 4"}
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
          "M1.083 3.251l-.291-.003L.819.74a.946.946 0 01-.185.167L.59.936.54.932C.252.908.05.669 0 .292l.289-.04c.013.103.061.33.225.38A1.06 1.06 0 00.827 0l.29.022-.034 3.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6572Icon;
/* prettier-ignore-end */
