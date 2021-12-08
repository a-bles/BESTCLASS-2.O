// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6445IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6445Icon(props: _6445IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.19.032a.665.665 0 00-.134.596c.014.088.038.174.07.258A1.055 1.055 0 01.108.43C.16.232.16.042.32.035"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.097.901A1.238 1.238 0 01.023.634.69.69 0 01.165.01l.043.036A.168.168 0 01.322 0l.003.07C.228.075.205.165.172.324L.146.44a1.04 1.04 0 00.016.437L.097.901zM.124.208a.605.605 0 00-.06.269.946.946 0 01.012-.056C.086.383.094.345.1.308.108.27.116.239.124.208z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6445Icon;
/* prettier-ignore-end */
