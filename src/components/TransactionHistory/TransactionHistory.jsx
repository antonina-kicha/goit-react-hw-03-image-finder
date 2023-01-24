import PropTypes from 'prop-types';
import {Table, HeadTable, RowTable, FirstColumn} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
  <HeadTable>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </HeadTable>

    <tbody>
        {items.map(item => (
            <RowTable key={item.id} >
            <FirstColumn>{item.type}</FirstColumn>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
            </RowTable>
            ))
        }
  </tbody>
</Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}
