import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Chart from 'react-native-chart';

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

const data = [
	[3, 1],
    [5, 3],
    [36, 80],
    [47, 98],
];

class BurndownScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={data}
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

export default BurndownScreen;