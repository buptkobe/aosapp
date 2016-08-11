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
import { query as projectQuery } from '../../actions/projectActions';
import { query as moduleQuery } from '../../actions/moduleActions';
import { query as versionQuery } from '../../actions/versionActions';

class CustomPick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      optionsdata: [],
    };
    if (props.value) {
      this.props.onChange && this.props.onChange(props.value);
    }
  }

  handleChange(option) {
    if (this.props.title === '项目') {
      this.props.moduleQuery(option.key);
      this.props.versionQuery(option.key);
    }
  	this.setState({selectoptionlabel: option.label, selectoptionkey: option.key});
    this.props.onChange && this.props.onChange(option.key);
  }

  componentWillMount() {
    if (this.props.title === '项目') {
      const teamid = this.props.user.user.devgroupid;
      this.props.projectQuery(teamid);
      this.setState({optionsdata: this.props.project.projectoptions});
    } else if (this.props.title === '模块') {
      this.setState({optionsdata: this.props.module.moduleoptions});
    } else if (this.props.title === '版本') {
      this.setState({optionsdata: this.props.version.versionoptions});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        	<Text style={{marginLeft:20}}>
        		{this.props.title}
        	</Text>
	        <ModalPicker
	            selectTextStyle={{color:'black'}}
	            data={this.state.optionsdata}
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
};

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

CustomPick.propTypes = {
  onChange: PropTypes.func,
  onValidationError: PropTypes.func,
  onValidationPass: PropTypes.func,
  title: PropTypes.string,
  validator: PropTypes.func,
  value: PropTypes.string,
};

function mapStateToProps(state) {
  const { user,project,module,version } = state;

  return {
    user,
    project,
    module,
    version
  }
}

const actions = {
  projectQuery,
  moduleQuery,
  versionQuery
}

export default connect(mapStateToProps, actions)(CustomPick);