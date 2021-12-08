// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BtnLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BtnLogoIcon(props: BtnLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M15 19a3 3 0 100-6 3 3 0 000 6z"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15 19a3 3 0 100-6 3 3 0 000 6z"}
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15 19a3 3 0 100-6 3 3 0 000 6z"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13 19v3l2-1 2 1v-3"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13 19v3l2-1 2 1v-3"}
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13 19v3l2-1 2 1v-3"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 20H5a2 2 0 01-2-2V8c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-1 1.73"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 20H5a2 2 0 01-2-2V8c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-1 1.73"
        }
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 20H5a2 2 0 01-2-2V8c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-1 1.73"
        }
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 10h12"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 10h12"}
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 10h12"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 13h3"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 13h3"}
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 13h3"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 16h2"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 16h2"}
        stroke={"currentColor"}
        strokeOpacity={".5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 16h2"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BtnLogoIcon;
/* prettier-ignore-end */
