/* -----------------------------------------------------------------------
 * <copyright company="Microsoft Corporation">
 *   Copyright (c) Microsoft Corporation.  All rights reserved.
 * </copyright>
 * ----------------------------------------------------------------------- */

import { ICallOutPropsConfig, InformationalCallOutComponent } from "../InformationalCallOut";
import { render, screen } from "@testing-library/react";

import { DirectionalHint } from "@fluentui/react";
import React from "react";

describe("InformationalCallOut component", () => {

    beforeEach(()=>{
        const callOutProps: ICallOutPropsConfig = {
            callOutDescription: "Test Description",
            iconName: "InfoSolid",
            iconClassName: "ms-ac-icondoc-tooltip",
            iconFontSize: 19,
            toolTipId: "ms-ac-offerDisableIconId",
            callOutConfig: {
              directionalHint: DirectionalHint.rightCenter,
              calloutWidth: 275,
              styles: {
                calloutMain: {
                  paddingTop: 9,
                  paddingBottom: 9,
                  paddingRight: 12,
                  paddingLeft: 12,
                }
              }
            }
          }
          render(<InformationalCallOutComponent {...callOutProps}></InformationalCallOutComponent>);
  });

  test("Should have info icon with tooltip text", () => {
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});