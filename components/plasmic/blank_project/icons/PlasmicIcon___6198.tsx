// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6198IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6198Icon(props: _6198IconProps) {
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
          "M1.158.805c.086.221.181.44.256.666.025.108.04.22.042.332a26.077 26.077 0 00-.156-.21H.35c.16.322.549.323.894.47a1.2 1.2 0 01-.956-.04c-.317-.097-.304-.386-.273-.663.04-.334.063-.67.093-1.003L.723.205.68.021.738 0c.138.269.278.537.42.805zm-.006.474c-.265.104-.493.189-.643-.035A1.58 1.58 0 00.73.964C.748.928.68.854.648.797.564.849.4.922.407.945c.052.18.094.409.225.505.193.144.379-.017.517-.171h.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6198Icon;
/* prettier-ignore-end */
