import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
  Text, BackHandler
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { getNews, resetNews } from "../../../../store/action/news";
import styles from "./style";
import Swiper from "react-native-swiper";
import { delay } from "redux-saga";
const Dimensions = require("Dimensions");

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false
    };
  }

  navigateToScreen(route) {
    const naviagtionAction = NavigationActions.navigate({
      routeName: route,
      params: {
        title: "News"
      }
    });
    this.props.navigation.dispatch(naviagtionAction);
  }

  componentDidMount() {
    this.props.getNews();
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    this.props.resetNews();
  }

  handleBackPress = () => {
    BackHandler.exitApp()
    console.log("handleBackPress")
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
            width={deviceWidth}
            style={this.swiperItem}
            key={item.url}
            onPress={this.flatListItemClicked.bind(this, item.url)}
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

  flatListItemClicked(url) {
    this.props.navigation.navigate("NewsDetail", {
      url: url
    });
  }

  flatListItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.newsItem}
        onPress={this.flatListItemClicked.bind(this, item.url)}
      >
        <View flex={1} flexDirection="row">
          <View flex={2} backgroundColor="gray">
            <Image
              style={styles.newsImage}
              source={{
                uri: item.urlToImage
              }}
            />
          </View>
          <View style={styles.newsTextStyle}>
            <Text style={styles.headerTitle} numberOfLines={3}>
              {item.title}
            </Text>
            <Text style={styles.title} numberOfLines={2}>
              {item.description}
            </Text>
            <Text style={styles.readMore}>> Read more</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  flatListHeader = () => {
    return <View height={20} />;
  };

  flatListFooter = () => {
    return <View height={100} />;
  };

  flatListSeperatorComponent = () => {
    return <View height={20} />;
  };

  flatListExtractor = (item, index) => index.toString();

  handleRefresh = async () => {
    this.setState({
      isRefreshing: true
    });
    await delay(2000);
    this.setState({
      isRefreshing: false
    });
  };

  render() {
    if (this.props.data.isLoading) {
      return (
        <View flex={1} style={styles.primaryDarkColor}>
          <ActivityIndicator marginTop={20} />
        </View>
      );
    }
    return (
      <View>
        <ScrollView style={styles.scrollHomeView}>
          <View style={styles.swiperContainer}>
            {this.swiperItem(this.props.data.articles.splice(0, 3))}
          </View>
          <FlatList
            data={this.props.data.articles}
            renderItem={this.flatListItem}
            ListHeaderComponent={this.flatListHeader}
            ListFooterComponent={this.flatListFooter}
            ItemSeparatorComponent={this.flatListSeperatorComponent}
            keyExtractor={this.flatListExtractor}
            refreshing={this.state.isRefreshing}
            onRefresh={this.handleRefresh}
          />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.news
  };
}

export default connect(
  mapStateToProps,
  { getNews, resetNews }
)(News);
