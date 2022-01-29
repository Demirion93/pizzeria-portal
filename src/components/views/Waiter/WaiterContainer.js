import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, updateStatusAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchStatusUpdate: (id, status) => dispatch (updateStatusAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
