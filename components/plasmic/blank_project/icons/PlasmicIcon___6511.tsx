// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6511IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6511Icon(props: _6511IconProps) {
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
          "M1.3 1.997a.34.34 0 00.546.058.8.8 0 00.035-1.21A5.4 5.4 0 00.958.25 4.369 4.369 0 00.531.06c.127-.033.2-.075.23-.053.46.268.898.573 1.308.913a.848.848 0 01.043 1.125.667.667 0 01-1.003.088.354.354 0 01.006-.556c.25-.183.427.004.538.249a.395.395 0 00.117-.568 1.266 1.266 0 00-.78-.69C.655.458.33.324 0 .201A3.37 3.37 0 00.053.067C.56.3 1.077.512 1.566.775a.895.895 0 01.345.459c.176.46-.04.727-.61.763z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6511Icon;
/* prettier-ignore-end */
