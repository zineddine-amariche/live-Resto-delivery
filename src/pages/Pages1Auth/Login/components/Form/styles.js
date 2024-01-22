import {StyleSheet} from 'react-native';
import { COLORS } from '../../../../../theme';

const styles = StyleSheet.create({
  containerForm: {
    // backgroundColor:'#eee',
    marginTop: 15,
  },
  Input: {
    color: COLORS.green1,
    fontSize: 16,
    fontFamily: "RobotoBold",
    flex: 1,
    paddingLeft: 2,
  },
  label: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '700',
  },
  left: {
    flexDirection: 'row',
    marginTop: 25,
    paddingLeft: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  labelText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  error: {
    color: '#ff0000',
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 13,
  },
  Identifiants: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  textRight: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor:"#ccc",
    alignItems: 'center',
    // justifyContent: 'space-between',
    // position: "relative",
  },
  iconPass: {
    color: '#aac840',
    fontSize: 20,
    position: 'absolute',
    right:18,
    top: 18,
  },

  containerButtons:{
    backgroundColor:'transparent'
  }
});

export default styles;
