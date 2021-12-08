// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6438IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6438Icon(props: _6438IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
        d={"M.222 2.023L.049.135C.213.75.272 1.388.222 2.023z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.208 2.261L0 0l.078.113c.17.624.23 1.272.178 1.916l-.048.232zM.13.636l.073.812A8.788 8.788 0 00.131.636z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6438Icon;
/* prettier-ignore-end */
