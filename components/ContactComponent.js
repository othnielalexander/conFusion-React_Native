import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title="Our Address">
          <Text style={{ margin: 10 }}>
            121, Clear Water Bay Road {"\n \n"} Clear Water Bay, Kowloon{" "}
            {"\n \n"} HONG KONG Tel: +852 1234 5678 {"\n \n"} Fax: +852 8765
            4321 {"\n \n"}a Email:confusion@food.net
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
