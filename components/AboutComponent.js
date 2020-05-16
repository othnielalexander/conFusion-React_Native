import React, { Component } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { History } from "./History";

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
  };
};

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderLeader = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    const { navigate } = this.props.navigation;

    if (this.props.leaders.isLoading) {
      return (
        <ScrollView>
          <History />
          <Card title="Corporate Leadership">
            <Loading />
          </Card>
        </ScrollView>
      );
    } else if (this.props.leaders.errMess) {
      return (
        <ScrollView>
          <History />
          <Card title="Corporate Leadership">
            <Text>{this.props.leaders.errMess}</Text>
          </Card>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <History />
          <Card title="Corporate Leadership">
            <FlatList
              data={this.props.leaders.leaders}
              renderItem={renderLeader}
              keyExtractor={(leader) => leader.id.toString()}
            />
          </Card>
        </ScrollView>
      );
    }
  }
}

export default connect(mapStateToProps)(About);
