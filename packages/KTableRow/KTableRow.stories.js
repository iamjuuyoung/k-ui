import { storiesOf } from '@storybook/vue'
import KTableRow from './KTableRow'

storiesOf('KTableRow', module)
  .add('normal', () => ({
    components: { KTableRow },
    template:
    `
      <KTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))