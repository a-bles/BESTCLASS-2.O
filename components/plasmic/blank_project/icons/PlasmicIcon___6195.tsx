// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6195IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6195Icon(props: _6195IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M1.273 1.955a.332.332 0 00.533.056.783.783 0 00.035-1.184A5.285 5.285 0 00.938.244 4.275 4.275 0 00.52.058C.644.026.715-.016.745.006c.45.262.878.561 1.28.893a.83.83 0 01.042 1.102.653.653 0 01-.981.086.346.346 0 01.005-.544c.244-.18.418.003.527.243a.387.387 0 00.114-.556A1.239 1.239 0 00.968.556C.642.448.323.316 0 .196.018.154.036.11.052.067c.496.228 1.002.435 1.48.692a.876.876 0 01.338.45c.172.45-.039.711-.597.747z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6195Icon;
/* prettier-ignore-end */
