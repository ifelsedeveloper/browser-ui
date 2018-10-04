/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Storybook requires
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

// Components
import * as React from 'react'
import NewPrivateTab from './concepts/aboutPages/newPrivateTab/index'

addDecorator(withKnobs)

storiesOf('Concepts: About Pages', module)
  .add('New Private Tab', () => <NewPrivateTab />)
