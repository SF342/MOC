import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar, Avatar, Badge } from 'react-native-elements';
import Moc_logo from '../../assets/moc_logo.png';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

class ShowPricePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: props.data,
      error: null,
    };
    this.arrayholder = props.data;
  }

  // componentDidMount() {
  //   this.makeRemoteRequest();
  // }

  // makeRemoteRequest = () => {
  //   const detail = [];
  //   const url = `https://dataapi.moc.go.th/gis-products`;
  //   this.setState({ loading: true });

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       for (let i = 1; i < res.length; i++) {
  //         detail.push(res[i]);
  //       };
  //       this.setState({
  //         data: detail,
  //         error: res.error || null,
  //         loading: false,
  //       });
  //       this.arrayholder = detail;
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });

  // };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {

    this.setState({
      value: text,
    });


    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.product_id.toUpperCase()} ${item.product_name} ${item.category_name}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              Component={TouchableScale}
              friction={0} //
              tension={200} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              linearGradientProps={{
                colors: ['#1544E2', '#1544E2'],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              ViewComponent={LinearGradient}
              containerStyle={{
                marginHorizontal: 16,
                marginVertical: 8,
                borderRadius: 8,
              }}
            >
              <Avatar source={Moc_logo} rounded />
              <ListItem.Content>
                <ListItem.Title style={{ fontSize: 22, color: '#FFC511', fontWeight: '700' }}>{`${item.product_name}`}</ListItem.Title>
                <ListItem.Subtitle style={{ color: '#CED0CE' }}>{item.product_id}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          keyExtractor={item => item.product_id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "600",
    color: "black"
  },
});

const mapStateToProps = (state) => {
  const dataTemp = (state.data.data).filter(data =>
    data.product_id.charAt(0) == 'P'
  )

  return {
    data: dataTemp
  }
}

export default connect(mapStateToProps)(ShowPricePage);