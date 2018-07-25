/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { BrowserSelectProps } from './index'

const StyledBrowserSelect = styled.select`
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 1);
  display: block;
  color: rgb(68, 68, 68);
  font-size: 13px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 6px 12px 6px 6px;
  width: 100%;
  background-color: #fbfbfb;
  background-size: 12px 12px;
  -webkit-appearance: none;
  min-height: 32px;
  margin-bottom: 12px;

  ${(p: BrowserSelectProps) => p.disabled
    ? css`
      user-select: none;
      opacity: 0.25;
    ` : ''
  }

  ${(p: BrowserSelectProps) => p.multiple
    ? css`
      padding: 6px;
    ` : ''
  }
` as any

const StyledBrowserSelectWrapper = styled.div`
  position: relative;

  &::after {
    display: ${(p: BrowserSelectProps) => p.multiple ? 'none' : 'flex'};
    opacity: ${(p: BrowserSelectProps) => p.disabled ? '0.25' : '1'};
    content: "▼";
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    max-height: 100%;
    height: 100%;
    padding: 0 8px;
    font-size: 13px;
  }
` as any

const StyledBrowserSelectTitle = styled.p`
  margin: 0 0 4px 2px;
` as any

export {
  StyledBrowserSelect,
  StyledBrowserSelectWrapper,
  StyledBrowserSelectTitle
}
