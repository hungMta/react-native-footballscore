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
const ImagePicker = require('react-native-image-picker')
console.log(ImagePicker)
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class Header extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      avatarSource: images.avatar
    };
  };
  

  chooseImage = () => {
    console.log(ImagePicker)
    // ImagePicker.showImagePicker(null, (response) => {
    //   console.log('Response = ', response);
    
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   }
    //   else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   }
    //   else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   }
    //   else {
    //     let source = { uri: response.uri };
    
    //     // You can also display the image using data:
    //     // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
    //     this.setState({
    //       avatarSource: source
    //     });
    //   }
    // });

   ImagePicker.showImagePicker(null, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.header}>
        <View />
        <TouchableOpacity style={styles.avatar} onPress={() => this.chooseImage()}>
          <Image
            source={this.state.avatarSource}
            style={styles.drawerImage}
          />
        </TouchableOpacity>
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
