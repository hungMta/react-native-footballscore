/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator, Alert
} from "react-native";
import { createStackNavigator, NavigationAction } from "react-navigation";
import Header from "../../drawer_navigation/header";
import styles from "../../style/styles";
import NewsScreen from "./NewsDetailScreen";
import Swiper from "react-native-swiper";
const NewsApi = require("../../api/NewsApi");
const Dimensions = require("Dimensions");
const deviceWidth = Dimensions.get("window").width;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.swiperItem = this.swiperItem.bind(this);
    this.state = {
      swiperList: [],
      articles: [],
      loading: true,
      refreshing: false
    };
  }

  on_press = text => () => {
    console.log(text);
  };

  componentDidMount() {
    this.makeRequestApi();
  }

  makeRequestApi = () => {
    const path =
      "top-headlines?sources=bbc-sport&apiKey=8b38389dc3e04267b8bf3d1d2836b700";
    return NewsApi.callAPI(path)
      .then(response => {
        this.setState({
          loading: false,
          swiperList: response.articles.splice(0, 3),
          articles: response.articles
        });
      })
      .catch(error => {
        throw error;
      });
  };

  myDot = () => {
    return <View style={styles.myDot} />;
  };

  myActiveDot = () => {
    return <View style={styles.myActiveDot} />;
  };

  swiperItem(list) {
    let deviceWidth = Dimensions.get("window").width;
    return (
      <Swiper
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={2}
        paginationStyle={{ bottom: 0 }}
        dot={this.myDot()}
        activeDot={this.myActiveDot()}
        showsButtons={false}
      >
        {list.map(item => (
          <TouchableOpacity
            style={{
              width: deviceWidth,
              height: 200,
              backgroundColor: "#F5FCFF",
              position: "relative"
            }}
            key={item.url}
            onPress={this.flatListItemClicked.bind(this,item.url)}
          >
            <Image
              resizeMode="cover"
              style={{
                width: deviceWidth,
                height: "100%"
              }}
              source={{
                uri: item.urlToImage
              }}
            />
            <View style={styles.colorWrapper} />
            <Text style={styles.swiperTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </Swiper>
    );
  }


  flatListItemClicked(url){
    console.log(url)
    this.props.navigation.navigate('news',{
        url: url
    });
  }

  flatListItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          height: 120,
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20
        }}
        onPress={this.flatListItemClicked.bind(this,item.url)}>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 2, backgroundColor: "gray" }}>
            <Image
              style={{
                width: "100%",
                height: 120
              }}
              source={{
                uri: item.urlToImage
              }}
            />
          </View>
          <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 10}}>
            <Text style={{ flexWrap: "wrap", color: "white" , fontWeight: 'bold'}} numberOfLines={3}>
              {item.title}
            </Text>
            <Text style={{ flexWrap: "wrap", color: "white" , }} numberOfLines= {2}>
              {item.description}
            </Text>
            <Text style={{color: "white", fontSize:10}}>> Read more</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  flatListHeader = () => {
    return <View height={20} />;
  }

  flatListFooter = () => {
    return <View height={100} />;
  }

  flatListSeperatorComponent = () => {
    return <View height={20} />;
  }

  flatListExtractor = (item, index) => item.url;

  render() {
    let deviceWidth = Dimensions.get("window").width;
    if (this.state.loading) {
      return (
        <View style={{ flex: 1 }}>
          <View style={[styles.centerChild, styles.primaryDarkColor]}>
            <ActivityIndicator />
          </View>
        </View>
      );
    }
    return (
      <View backgroundColor="#334562">
        <ScrollView style={styles.scrollHomeView}>
          <View style={{ width: "100%", height: 200 }}>
            {this.swiperItem(this.state.swiperList)}
          </View>
          <FlatList
            data={this.state.articles}
            renderItem={this.flatListItem}
            ListHeaderComponent={this.flatListHeader}
            ListFooterComponent={this.flatListFooter}
            ItemSeparatorComponent={this.flatListSeperatorComponent}
            keyExtractor={this.flatListExtractor}
          />
        </ScrollView>
      </View>
    );
  }
}