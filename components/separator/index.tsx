/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import StyledSeparator from './style'

export interface SeparatorProps {
  // component styles
  noMargin?: boolean
}

class Separator extends React.PureComponent<SeparatorProps, {}> {
  render () {
    return (
      <StyledSeparator noMargin={this.props.noMargin} />
    )
  }
}

export default Separator
