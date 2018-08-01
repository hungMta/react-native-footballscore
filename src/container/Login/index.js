import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Modal,
  ActivityIndicator,
  BackHandler
} from "react-native";
import { connect } from "react-redux";
import styles from "./style";
import images from "../../../assets/images/index";
import firebase from "react-native-firebase";
import { GoogleSignin } from "react-native-google-signin";
import { loginRequest } from "../../store/action/login";
import Icon from "react-native-vector-icons/EvilIcons";
import { NavigationActions, StackActions } from "react-navigation";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    Keyboard.dismiss();
    this.props.loginRequest();
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    console.log("handleBackPress");
    BackHandler.exitApp();
  };

  navigateToMain() {
    console.log("navigateToMain");

    const navigateAction = NavigationActions.navigate({
      routeName: "News"
    });

    const pushScreen = StackActions.push({
      routeName: "News"
    });

    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    console.log("navigation: ", this.props.navigation);
    console.log("this.props.isLoginSucces=", this.props.isLoginSucces);
    if (this.props.isLoginSuccess) {
      this.navigateToMain();
    }
    return (
      <View style={[styles.centerChild, styles.primaryDarkColor]}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.isLogging}
          onRequestClose={() => {
            console.log("model has been closed");
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              position: "relative"
            }}
          >
            <View style={styles.backgroundOpactity} />
            <View style={styles.logginPopup}>
              <ActivityIndicator size="large" />
            </View>
          </View>
        </Modal>
        <View flexDirection="column-reverse" />
        <View>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor="gray"
            style={styles.textInput}
            marginTop={10}
            height={40}
          />

          <TextInput
            secureTextEntry={true}
            placeholder="Enter password"
            placeholderTextColor="gray"
            style={styles.textInput}
            marginTop={20}
            height={40}
          />
        </View>
        <KeyboardAvoidingView
          style={{ alignItems: "center" }}
          behavior="padding"
          enabled
        >
          <TouchableOpacity
            onPress={() => this.navigateToMain()}
            style={styles.btnLogin}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.login()}
            style={[styles.btnLoginSocial, { backgroundColor: "#385895" }]}
          >
            <View style={styles.iconSocicalContainer}>
              <Icon name="sc-facebook" size={30} color="white" />
            </View>
            <View style={styles.wrapRelative}>
              <Text style={styles.txtSocialPostition}>Login via Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.login()}
            style={[
              styles.btnLoginSocial,
              { backgroundColor: "#D74036", marginTop: 15 }
            ]}
          >
            <View style={styles.iconSocicalContainer}>
              <Icon name="sc-google-plus" size={30} color="white" />
            </View>
            <View style={styles.wrapRelative}>
              <Text style={styles.txtSocialPostition}>Login via Google</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogging: state.auth.isLogging,
    profile: state.auth.profile,
    isLoginSuccess: state.auth.isLoginSuccess,
    err: state.auth.errMsg
  };
}

export default connect(
  mapStateToProps,
  { loginRequest }
)(Login);
