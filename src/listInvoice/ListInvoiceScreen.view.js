import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './ListInvoiceScreen.styles';
import moment from 'moment';
import {debounce} from 'lodash';
import SortButton from './component/SortButton';
import {SORT_STATUS} from './ListInvoiceScreen.constant';

export default function ListInvoiceScreenView(props) {
  const {
    dataListInvoice,
    handleStoreEndReached,
    isLoadMore,
    handleSearchWithText,
    sortOption,
    handleNavigateCreateInvoice,
    handleSelectSort,
    createInvoice,
  } = props;

  // Prevent call onEndReached multiple time
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState();

  //Render each item
  const renderItem = ({item, index}) => (
    <View style={styles.itemContainer}>
      <View style={styles.leftSideStyle}>
        <Text>#{item?.invoiceNumber}</Text>
        <Text style={styles.dateStyle}>
          {moment(item?.createdAt).format('HH:mm - DD/MM/YYYY')}
        </Text>
      </View>
      <View>
        <Text>
          -{item?.totalTax} {item?.currency}
        </Text>
      </View>
    </View>
  );

  const renderFooterComponent = () => {
    if (isLoadMore) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          placeholder={'Search'}
          onChangeText={debounce(handleSearchWithText, 650)}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingBottom: 12}}>
          <SortButton
            title={'From high to low'}
            isSelected={
              sortOption.ordering === SORT_STATUS.ORDERING_HIGH_TO_LOW
            }
            onPress={() => {
              if (sortOption.ordering === SORT_STATUS.ORDERING_HIGH_TO_LOW) {
                handleSelectSort({ordering: ''});
              } else {
                handleSelectSort({ordering: SORT_STATUS.ORDERING_HIGH_TO_LOW});
              }
            }}
          />
          <SortButton
            title={'From Low to high'}
            isSelected={
              sortOption.ordering === SORT_STATUS.ORDERING_LOW_TO_HIGH
            }
            onPress={() => {
              if (sortOption.ordering === SORT_STATUS.ORDERING_LOW_TO_HIGH) {
                handleSelectSort({ordering: ''});
              } else {
                handleSelectSort({ordering: SORT_STATUS.ORDERING_LOW_TO_HIGH});
              }
            }}
          />
          <SortButton
            title={'Sort By'}
            isSelected={sortOption.sortBy === SORT_STATUS.SORT_BY_DATE}
            onPress={() => {
              if (sortOption.sortBy === SORT_STATUS.SORT_BY_DATE) {
                handleSelectSort({sortBy: ''});
              } else {
                handleSelectSort({sortBy: SORT_STATUS.SORT_BY_DATE});
              }
            }}
          />
          <SortButton
            title={'Paid'}
            isSelected={sortOption.status === SORT_STATUS.PAID}
            onPress={() => {
              if (sortOption.status === SORT_STATUS.PAID) {
                handleSelectSort({status: ''});
              } else {
                handleSelectSort({status: SORT_STATUS.PAID});
              }
            }}
          />
        </ScrollView>
        <SortButton
          title={'+ Create Invoice'}
          onPress={handleNavigateCreateInvoice}
        />
      </View>
      <View>
        <FlatList
          data={dataListInvoice}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={renderFooterComponent}
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            if (!onEndReachedCalledDuringMomentum) {
              handleStoreEndReached();
              setOnEndReachedCalledDuringMomentum(true);
            }
          }}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          onEndReachedThreshold={0.1}
          onMomentumScrollBegin={() =>
            setOnEndReachedCalledDuringMomentum(false)
          }
        />
      </View>
    </SafeAreaView>
  );
}
