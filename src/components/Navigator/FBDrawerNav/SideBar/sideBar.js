import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  Image,
  Modal,
  Platform
} from "react-native";
import {
  DrawerActions,
  StackActions,
  NavigationActions
} from "react-navigation";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";
import option from "./option";
import images from "../../../../../assets/images/index";
const ImagePicker = require("react-native-image-picker");
const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: images.avatar,
      pickerDialogVisbile: false
    };
  }

  chooseImage = () => {
    console.log(ImagePicker);
    ImagePicker.showImagePicker({}, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
  };

  pickImageFromGalery = () => {
    ImagePicker.launchImageLibrary(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
    this.setState({
      pickerDialogVisbile: false
    })
  };

  showPickerDialogAndroid = () => {
    console.log("##########");
    if (Platform.OS === "ios") {
      this.chooseImage();
    } else {
      this.setState({
        pickerDialogVisbile: !this.state.pickerDialogVisbile
      });
    }
  };

  render() {
    return (
      <View style={styles.header}>
        <View />
        <TouchableOpacity
          style={styles.avatar}
          onPress={() => this.showPickerDialogAndroid()}
        >
          <Image source={this.state.avatarSource} style={styles.drawerImage} />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white" }}>Eddy</Text>
          <Text style={{ color: "white" }}>Eddy@email.com</Text>
        </View>
        {Platform.OS === "android" && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.pickerDialogVisbile}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, position: "relative" }}
              onPress={() => this.showPickerDialogAndroid()}
            >
              <View style={styles.backgroundPickerDialog} />
              <View style={styles.pickerDialogContainer}>
                <View>
                  <TouchableWithoutFeedback>
                    <View
                      style={[
                        styles.pickerButton,
                        styles.pickerButtonMargin,
                        {
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5
                        }
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#0278E6"
                        }}
                      >
                        Select avata
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableOpacity
                    style={[styles.pickerButton, styles.pickerButtonMargin]}
                  >
                    <Text>Choose from camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.pickerButton,
                      styles.pickerButtonMargin,
                      {
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5
                      }
                    ]}
                    onPress={() => this.pickImageFromGalery()}
                  >
                    <Text>Choose from galery</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.pickerButton,
                      {
                        borderRadius: 5,
                        margin: 10
                      }
                    ]}
                    onPress={() => {
                      this.showPickerDialogAndroid();
                    }}
                  >
                    <Text style={{ color: "#FF6347", fontSize: 16 }}>
                      Close
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        )}
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
