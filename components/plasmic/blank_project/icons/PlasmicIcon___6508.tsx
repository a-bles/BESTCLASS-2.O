// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6508IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6508Icon(props: _6508IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M2.31.129S1.062.272.055 2.412h.059S1.129.479 2.385.178l.598-.08a.79.79 0 00-.674.03z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.116 2.446H0l.025-.05C1.002.315 2.19.109 2.298.094a.817.817 0 01.7-.029L3.1.12l-.71.095C1.164.507.158 2.41.148 2.43l-.01.019-.021-.002zM2.274.172C2.067.216 1.097.508.246 2.114.567 1.581 1.34.461 2.274.172zM2.69.074a.825.825 0 00-.344.077l.032-.008.436-.059A.818.818 0 002.69.077V.074z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6508Icon;
/* prettier-ignore-end */
