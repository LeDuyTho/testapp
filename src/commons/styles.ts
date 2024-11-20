import {StyleSheet} from 'react-native';
import colors from './colors';

export const appStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  centerBold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fab: {
    bottom: 30,
    position: 'absolute',
    right: 10,
  },
  fab2: {
    bottom: 16,
    position: 'absolute',
    right: 10,
  },
  fabLktkhs: {
    bottom: 10,
    position: 'absolute',
    right: 10,
  },
  text16: {
    color: colors.text,
    fontSize: 16,
  },
  boldText16: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text15: {
    color: colors.text,
    fontSize: 15,
  },
  boldText15: {
    color: colors.text,
    fontSize: 15,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
