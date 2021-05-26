import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";

export default class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }

  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };


  render() {
    console.log(this.props);
    const { startDate, endDate, displayedDate } = this.state;
    const { setStartDate, setEndDate } = this.props.route.params;
    setStartDate(startDate);
    setEndDate(endDate);
    
    if(startDate && endDate){
      this.props.navigation.navigate({name:'Challenge',params:{start:startDate,end:endDate},merge:true})
    }
    return (
      <View style={styles.container}>
        <DateRangePicker
          open={true}
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
        >
          
        </DateRangePicker>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
