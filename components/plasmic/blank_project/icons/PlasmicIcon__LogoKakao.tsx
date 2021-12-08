// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoKakaoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoKakaoIcon(props: LogoKakaoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M12 3c-4.97 0-9 3.467-9 7.745a7.58 7.58 0 004.27 6.59c-.188.765-.682 2.77-.78 3.2-.122.532.179.525.377.382.154-.112 2.466-1.822 3.463-2.56.552.089 1.11.133 1.67.133 4.971 0 9-3.468 9-7.745C21 6.467 16.97 3 12 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoKakaoIcon;
/* prettier-ignore-end */
