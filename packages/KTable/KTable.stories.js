import { storiesOf } from '@storybook/vue'
import KTable from './KTable'

var items = [
  [ 'Yair Lamb', 'yair.lamb@email.com' ],
  [ 'Leonardo Payne', 'leonardo.payne@email.com' ],
  [ 'Carl Henson', 'carl.henson@email.com' ],
  [ 'Jensen Combs', 'jensen.combs@email.com' ],
  [ 'Amiah Burton', 'amiah.burton@email.com' ],
  [ 'Yaretzi Mayo', 'yaretzi.mayo@email.com' ],
  [ 'Kamren Huffman', 'kamren.huffman@email.com' ]
]

storiesOf('KTable', module)
  .add('with 7 items', () => ({
    components: { KTable },
    template:
    `
      <KTable
        :items="items"
      />
    `,
    data: () => ({
      items
    })
  }))
  .add('with 7 items + header', () => ({
    components: { KTable },
    template:
    `
      <KTable
        :header="header"
        :items="items"
      />
    `,
    data: () => ({
      header: [
        'Name',
        'Email'
      ],
      items
    })
  }))
  