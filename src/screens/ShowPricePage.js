import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { getPrice } from '../redux/actions/dataActions';
import LinearGradient from 'react-native-linear-gradient';
import Moc_logo from '../../assets/moc_logo.png';
import { ActivityIndicator, Image } from 'react-native';
import {
  HStack,
  NativeBaseProvider,
  Center,
  ScrollView,
} from 'native-base';
import { ShowPricePageStyle } from '../css/ShowPricePage';
import { LineChart } from 'react-native-chart-kit';


const ShowPricePage = ({ navigation, route }) => {
  const PID = route.params.id;

  const dispatch = useDispatch();
  const { productprice } = useSelector(state => state.data);
  const { theme } = useSelector(state => state.theme);
  const image = useSelector(state => state.data.urlimage);

  const [product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [date, setDate] = useState();

  useEffect(() => {
    checkPD()
  }, [PID]);


  const checkPD = () => {
    var id = productprice.findIndex(PD => PD.product_id === PID);
    if (id === -1) {
      dispatch(getPrice(PID));
    } else {
      setProduct(productprice[id]);
    }
  };

  const mapDate = () => {
    var options = { weekday: 'short' };
    let temp = [];
    product !== null && product.price_list.map((price) => {
      let dateTemp = new Date(price.date)
      temp.push(new Intl.DateTimeFormat('en-US', options).format(dateTemp))
    })
    temp = temp.slice(-6)
    return temp;
  }

  const mapPrice = () => {
    let temp = [];
    product !== null && product.price_list.map((price) => {
      temp.push((price.price_min + price.price_max) / 2)
    })
    temp = temp.slice(-6)
    return temp;

  }

  /////////////////////////CHART//////////////////////
  const data = {
    labels: mapDate(),
    datasets: [
      {
        data: mapPrice(),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],

  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  ////////////////////////////////////////////////////

  if (Loading) {
    checkPD();
    if (!product?.description) {
      for (var key in product) {
        if (product.hasOwnProperty(key)) {
          if (key == 'price_max_avg' || key == 'price_min_avg') {
            product[key] = Math.ceil(product[key]);
          }
          setDate(product['price_list'][0]['date'].substring(0, 10));
        }
      }
    }

    if (product !== null) {
      setLoading(false);
    }
  }


  const filterImageUrl = val => {
    let nameImg = image.filter(element => val.search(element.name) !== -1);

    if (nameImg.length !== 0) {
      return { uri: nameImg[0].url };
    } else {
      return Moc_logo;
    }
  };

  return (
    <LinearGradient
      colors={[theme.background1, theme.background2]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={ShowPricePageStyle(theme).linearG}>
      <NativeBaseProvider
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {product === null || Loading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView>
            <Center h="100%" justifyContent="center" alignItems="center">
              <HStack space={4} alignItems="center" padding={3}>
                <Center w="325" h="550" rounded="md" shadow={3}>
                  <LinearGradient
                    colors={['#EDEDED', '#7F7C82']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={ShowPricePageStyle(theme).container1}>
                    <View style={ShowPricePageStyle(theme).box1}>
                      <View>
                        <View
                          style={{
                            position: 'absolute',
                            width: 135,
                            height: 136,
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderRadius: 100,
                          }}></View>
                        <Image
                          style={ShowPricePageStyle(theme).logo}
                          source={filterImageUrl(product.product_name)}
                          rounded></Image>
                      </View>
                      <View style={ShowPricePageStyle(theme).TextContainer1}>
                        <Text style={ShowPricePageStyle(theme).topic}>{product.product_name}</Text>
                      </View>


                      {product?.description === "data out of date" ? (
                        <>
                          <View>
                            <Text style={ShowPricePageStyle(theme).title1}>{product.description}</Text>
                          </View>
                        </>) : (
                        <><View style={ShowPricePageStyle(theme).TextContainer1}>
                          <Text style={ShowPricePageStyle(theme).title}>ประเภท: </Text>
                          <Text style={ShowPricePageStyle(theme).title1}> {product.group_name}</Text>
                        </View><View style={ShowPricePageStyle(theme).TextContainer1}>
                            <Text style={ShowPricePageStyle(theme).title}>ราคาต่ำสุด: </Text>
                            <Text style={ShowPricePageStyle(theme).title1}>
                              {product.price_min_avg ? product.price_min_avg.toFixed(2) : 0}  บาท
                            </Text>
                          </View><View style={ShowPricePageStyle(theme).TextContainer1}>
                            <Text style={ShowPricePageStyle(theme).title}>ราคาสูงสุด: </Text>
                            <Text style={ShowPricePageStyle(theme).title1}>
                            {product.price_max_avg ? product.price_max_avg.toFixed(2) : 0}  บาท
                            </Text>
                          </View><View style={ShowPricePageStyle(theme).TextContainer1}>
                            <Text style={ShowPricePageStyle(theme).update}>**อัพเดทราคาเมื่อ: </Text>
                            <Text style={ShowPricePageStyle(theme).update1}> {date}</Text>
                          </View><LineChart
                            data={data}
                            width={300}
                            height={180}
                            chartConfig={chartConfig} /></>)}
                    </View>
                  </LinearGradient>
                </Center>
              </HStack>
            </Center>
          </ScrollView>
        )}
      </NativeBaseProvider>
    </LinearGradient>
  );
};

export default ShowPricePage;
