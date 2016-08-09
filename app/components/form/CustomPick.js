import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalPicker from 'react-native-modal-picker';
import Util from '../../common/util';
import { connect } from 'react-redux';
import Service from '../../common/service';

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  rightTextInput: {
    height: 44,
    width: 200,
    marginRight: 10,
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'right',
  },
  title: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
    fontSize: 16,
  },
  icon: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
  text:{
    marginLeft:10,
    width:Util.size.width-80,
    height:40,
    justifyContent: 'center',
  },
});

class CustomPick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      optionsdata: props.optionsdata,
    };
    if (props.value) {
      this.props.onChange && this.props.onChange(props.value);
    }
  }

  handleChange(option) {
  	this.setState({selectoptionlabel: option.label, selectoptionkey: option.key});
    this.props.onChange && this.props.onChange(option.key);
  }

  render() {
    return (
      <View style={styles.container}>
        	<Text style={{marginLeft:20}}>
        		{this.props.title}
        	</Text>
	        <ModalPicker
	            selectTextStyle={{color:'black'}}
	            data={this.props.optionsdata}
	            initValue="选择"
	            cancelText="取消"
	            onChange={this.handleChange.bind(this)} >
	            <View style={styles.text}>

	              	<Text>
	                	{this.state.selectoptionlabel}
	              	</Text>
	            </View>
	        </ModalPicker>
	      	<View style={{marginRight:10}}>
		        <Icon name="angle-down" size={20}></Icon>
	      	</View>
      </View>
    );
  }
}

CustomPick.propTypes = {
  onChange: PropTypes.func,
  onValidationError: PropTypes.func,
  onValidationPass: PropTypes.func,
  title: PropTypes.string,
  validator: PropTypes.func,
  value: PropTypes.string,
};

function mapStateToProps(state) {
  const { user } = state;

  return {
    user,
  }
}

const actions = {
  
}

export default connect(mapStateToProps, actions)(CustomPick);