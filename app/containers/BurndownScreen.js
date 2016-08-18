import React, {Component} from 'react';
import { StyleSheet, View , Text, TouchableOpacity} from 'react-native';
import Chart from 'react-native-chart';
import Util from '../common/util';
import Service from '../common/service';
import { Icon } from 'react-native-material-ui';
import NavigationBar from 'react-native-navbar';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 300,
        height: 400,
    },
});

var linedatas = [
    ["2016.06.08",17],
    ["2016.06.12",46],
    ["2016.06.27",51],
    ["2016.07.11",58],
    ["2016.08.01",61],
    ["2016.08.04",64],
    ["2016.08.15",24]
];

class BurndownScreen extends Component {

    state = {
        linedatas: [[0,0]],
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>项目: {this.props.project.selectedlabel} {'\t'} 版本: {this.props.version.selectedlabel}</Text>

                <Text>{this.props.projectradio}</Text>
                <Chart
                    style={styles.chart}
                    data={this.props.burndown.linedatas}
                    verticalGridStep={3}
                    type="line"
                    showDataPoint={false}
                    tightBounds={true}
                    
                    showGrid={true}
                 />
            </View>
        );
    }
};

function mapStateToProps(state) {
    const { burndown,project,version } = state;

    return {
      burndown,
      project,
      version
    }
}

export default connect(mapStateToProps, null)(BurndownScreen);