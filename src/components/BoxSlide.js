import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSlider} from '../redux/slices/sliderSlice';
import SkeletonBanner from '../common/skeleton/SekeletonBanner';
const {width} = Dimensions.get('window');

const BoxSlide = ({cateScreen}) => {
  const dispatch = useDispatch();
  const {slider, isLoading} = useSelector(state => state.sliderSlice);
  const [activeSlider, setActiveSlider] = useState(0);
  const [entries, setEntries] = useState(slider?.length);
  useEffect(() => {
    dispatch(getSlider());
  }, []);

  const PaginationCus = () => (
    <Pagination
      dotsLength={slider?.length}
      activeDotIndex={activeSlider}
      containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
  if (isLoading) {
    return <SkeletonBanner />;
  } else {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
          position: 'relative',
          paddingTop: 10,
        }}>
        <Carousel
          style={{flex: 1}}
          data={slider}
          renderItem={({item}) => (
            <Image
              source={{uri: item.image}}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          )}
          sliderWidth={width}
          itemWidth={width / 1.1}
          onSnapToItem={index => setActiveSlider(index)}
          layout={'stack'}
          autoplay={true}
          autoplayDelay={3000}
          autoplayInterval={3000}
          loop
        />
        <View style={{position: 'absolute', bottom: 0}}>{PaginationCus()}</View>
      </View>
    );
  }
};

export default BoxSlide;
