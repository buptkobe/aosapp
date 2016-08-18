const React = require('react');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
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
import {query as queryProject} from '../actions/projectActions';
import {query as queryVersion} from '../actions/versionActions';
import { connect } from 'react-redux';

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

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

class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  state = {
  	projectradio: '',
  	versionradio: '',
  	projectoptions:[],
  	versionoptions:[]
  };

  handleProjectRadioChange(radio) {
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
  };

  handleVersionRadioChange(radio) {
    this.setState({ versionradio: radio })
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
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        
        <CellsTitle>项目</CellsTitle>
        <RadioCells
          options={this.state.projectoptions}
          onChange={this.handleProjectRadioChange.bind(this)}
          value={this.state.projectradio}
          style={{width:200}}
        />
        <CellsTitle>版本</CellsTitle>
        <RadioCells
          options={this.state.versionoptions}
          onChange={this.handleVersionRadioChange.bind(this)}
          value={this.state.versionradio}
          style={{width:200}}
        />
        <ButtonArea style={{  paddingRight: 120 }}>
      		<Button onPress={() => {this.props.onItemSelected(this.state)}} style={[S.mt15,S.mb20]}>确定</Button>
	      
      	</ButtonArea>	
      </ScrollView>
    );
  }
};

function mapStateToProps(state) {
    const { user,project,version } = state;

    return {
      user,
      project,
      version
    }
}

const actions = {
    queryProject,
    queryVersion,
}

export default connect(mapStateToProps, actions)(Menu);