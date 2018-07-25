import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import {
  DrawerActions,
  StackActions,
  NavigationActions
} from "react-navigation";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";
import option from "./option";
import images from "../../../../../assets/images/index"

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View />
        <View style={styles.avatar}>
          <Image
            source={images.avatar}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ alignItems: "center"}}>
          <Text style={{ color: "white" }}>Eddy</Text>
          <Text style={{ color: "white" }}>Eddy@email.com</Text>
        </View>
      </View>
    );
  }
}

class SideBar extends Component {
  left(iconName) {
    return <Ionicons name={iconName} color="white" size={25} />;
  }

  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.closeDrawer();
  }

  sideBarItem = (item, index) => {
    return (
      <View key={index}>
        <TouchableOpacity
          style={styles.itemContanier}
          onPress={() => this.navigateToScreen(item.route)}
        >
          {this.left(item.icon)}
          <Text style={{ color: "white", marginLeft: 20 }}>{item.name}</Text>
        </TouchableOpacity>
        <View
          style={{ height: 0.5, width: "100%", backgroundColor: "white" }}
        />
      </View>
    );
  };

  sideBarKeyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={[styles.primaryColor, styles.flex_1]}>
        <Header />
        <View style={styles.listItemContainer}>
          {option.listItems.map((item, index) => this.sideBarItem(item, index))}
        </View>
      </View>
    );
  }
}

export default SideBar;
