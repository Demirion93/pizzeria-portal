import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.any,
    fetchTables: PropTypes.func,
    fetchStatusUpdate: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  };

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status) {
    const { fetchStatusUpdate } = this.props;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => fetchStatusUpdate(id, 'thinking')}>thinking</Button>
            <Button onClick={() => fetchStatusUpdate(id, 'ordered')} to={`${process.env.PUBLIC_URL}/waiter/order/`}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <>
            <Button onClick={() => fetchStatusUpdate(id, 'ordered')} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
          </>
        );
      case 'ordered':
        return (
          <>
            <Button onClick={() => fetchStatusUpdate(id, 'prepared')}>prepared</Button>
            <Button to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>new order</Button>
          </>
        );
      case 'prepared':
        return (
          <>
            <Button onClick={() => fetchStatusUpdate(id, 'delivered')} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>delivered</Button>
          </>
        );
      case 'delivered':
        return (
          <Button onClick={() => fetchStatusUpdate(id, 'paid')} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => fetchStatusUpdate(id, 'free')} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Idle Time</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.idle}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
