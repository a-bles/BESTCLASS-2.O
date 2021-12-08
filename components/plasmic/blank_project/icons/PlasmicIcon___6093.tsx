// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _6093IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _6093Icon(props: _6093IconProps) {
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
        d={"M.057.051L.55.548.555.545.073.043.057.051z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.545.592L.524.572.03.076 0 .046.038.021.056.01.079 0l.018.019.514.536-.066.037z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _6093Icon;
/* prettier-ignore-end */
