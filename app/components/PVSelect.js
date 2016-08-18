const React = require('react');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} = require('react-native');
const { Component } = React;
import {
  Cells,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  CellText,
  Input,
  Label,
  TextArea,
  Switch,
  RadioCells,
  CheckboxCells,
  Uploader,
  Select,
  Button,
  ButtonArea
} from 'rn-weui/src';
import S from 'react-native-stylekit';
import {query as queryProject, select as projectSelect} from '../actions/projectActions';
import {query as queryVersion, select as versionSelect} from '../actions/versionActions';
import { connect } from 'react-redux';
import { Actions} from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import { Icon } from 'react-native-material-ui';
import {query} from '../actions/burndownActions';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    
    backgroundColor: '#DFEFF5',
    padding: 20,
  },
  button: {
  	alignItems: 'center',
    justifyContent: 'center',
  },
});

class PVSelect extends Component {

  state = {
  	projectradio: '',
  	versionradio: '',
  	projectoptions:[],
  	versionoptions:[]
  };

  handleProjectRadioChange(radio, label) {
    this.props.queryVersion(radio);
    this.setState({ 
    	projectradio: radio,
    	
    });
    setTimeout(() => {
    	var ops = this.props.version.versionoptions.map(function(option) {
	  		return {
	  			label: option.label,
	  			value: option.key
	  		}
	  	});
    	this.setState({
    		versionoptions: ops
    	});
    }, 500);
    this.props.projectSelect(radio, label);
  };

  handleVersionRadioChange(radio, label) {
	this.setState({ versionradio: radio });
	this.props.versionSelect(radio, label);
  };

  onItemSelected() {
  	this.props.query(this.state.projectradio, this.state.versionradio);
  	setTimeout(() => {
	  	Actions.pop();
  	}, 1000);
  };

  componentWillMount() {
  	const cteamguid = this.props.user.user.devgroupid;
  	this.props.queryProject(cteamguid);
  	var ops = this.props.project.projectoptions.map(function(option) {
  		return {
  			label: option.label,
  			value: option.key
  		}
  	});
  	this.setState({projectoptions: ops});
  };

  render() {
  	var leftButtonConfig = 
          <TouchableOpacity style={{justifyContent: 'center',marginLeft:10}} 
            onPress={()=>{Actions.pop()}} >
            <Icon name="arrow-back" size={18}></Icon>
          </TouchableOpacity>;
    var titleConfig = {
        title: '项目版本选择',
    };
    return (
    	<View style={{flex:1}}> 
    		<NavigationBar
			        title={titleConfig}
			        style={{height:64,borderBottomWidth:1}}
			        leftButton={leftButtonConfig}
			      />
	      	<ScrollView scrollsToTop={false} style={styles.menu}>
		        
			     
		        <CellsTitle>项目</CellsTitle>
		        <RadioCells
		          options={this.state.projectoptions}
		          onChange={this.handleProjectRadioChange.bind(this)}
		          value={this.state.projectradio}
		        />
		        <CellsTitle>版本</CellsTitle>
		        <RadioCells
		          options={this.state.versionoptions}
		          onChange={this.handleVersionRadioChange.bind(this)}
		          value={this.state.versionradio}
		        />
		        <ButtonArea>
		      		<Button onPress={this.onItemSelected.bind(this)} style={[S.mt15,S.mb20]}>确定</Button>
			      
		      	</ButtonArea>	
	      	</ScrollView>
      	</View>
    );
  }
};

function mapStateToProps(state) {
    const { user,project,version,burndown } = state;

    return {
    	user,
    	project,
    	version,
      	burndown
    }
}

const actions = {
    query,
    queryProject,
    queryVersion,
    projectSelect,
    versionSelect,
}

export default connect(mapStateToProps, actions)(PVSelect);