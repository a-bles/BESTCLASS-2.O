// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6499IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6499Icon(props: _6499IconProps) {
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
          "M.133.033a.663.663 0 01.134.596 1.31 1.31 0 01-.07.258A1.05 1.05 0 00.214.432C.164.233.161.043.001.036"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.229.901L.163.877A1.04 1.04 0 00.18.44L.153.324C.12.164.096.075 0 .07V0c.043 0 .084.016.116.045L.158.009a.699.699 0 01.14.632A1.153 1.153 0 01.228.9zM.2.211l.023.098C.232.343.238.384.25.423a.555.555 0 01.01.053A.6.6 0 00.2.21h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6499Icon;
/* prettier-ignore-end */
