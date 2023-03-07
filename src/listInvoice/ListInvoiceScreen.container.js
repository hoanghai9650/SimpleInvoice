import React, {useEffect, useState} from 'react';

import ListInvoiceScreenView from './ListInvoiceScreen.view';
import {useDispatch} from 'react-redux';
import {getListInvoicesAction} from '../appRedux/actions/invoice';

import {SCENE_NAME} from '../scenes/sceneName';
import {useIsFocused} from '@react-navigation/native';

export default function ListInvoiceScreenContainer({navigation}) {
  const dispatch = useDispatch();

  // data for showing
  const [dataListInvoice, setDataListInvoice] = useState();

  // show loading animate
  const [isLoadMore, setIsLoadMore] = useState(false);

  const [payloadParams, sePayloadParams] = useState({
    pageNum: 1,
    pageSize: 10,
    text: '',
  });

  const [sortOption, setSortOption] = useState({
    ordering: '',
    sortBy: '',
    status: '',
  });

  const [numberOfPages, setNumOfPages] = useState();

  const isFocus = useIsFocused();
  // Call Api to get list invoice
  const getListInvoice = (params = {}, loadMore = false) => {
    if (loadMore) {
      setIsLoadMore(true);
    }

    dispatch(
      getListInvoicesAction({
        ...params,
        callback: (err, res) => {
          if (loadMore) {
            setIsLoadMore(false);
          }
          if (res) {
            const {totalRecords} = res?.paging || {};
            const numOfPages = Math.round(
              totalRecords / payloadParams.pageSize,
            );
            setDataListInvoice(
              loadMore ? [...dataListInvoice, ...res?.data] : res?.data,
            );

            setNumOfPages(numOfPages);
          } else {
            console.log(err);
          }
        },
      }),
    );
  };

  //load more data when reach the end of list
  const handleStoreEndReached = () => {
    const canLoadMoreContent = payloadParams?.pageNum < numberOfPages;
    if (canLoadMoreContent) {
      const params = {
        ...payloadParams,
        pageNum: payloadParams?.pageNum ? payloadParams?.pageNum + 1 : 1,
      };
      sePayloadParams(params);
      getListInvoice(params, true);
    }
  };

  useEffect(() => {
    if (isFocus) {
      getListInvoice();
    }
  }, [isFocus]);

  const handleSearchWithText = text => {
    const params = {
      ...payloadParams,
      text,
    };
    sePayloadParams(params);
    getListInvoice(params, false);
  };

  const handleSelectSort = (item = {}) => {
    setSortOption({
      ...sortOption,
      ...item,
    });
    const params = {...payloadParams, ...item};
    sePayloadParams(params);
    getListInvoice(params, false);
  };
  const handleNavigateCreateInvoice = () => {
    navigation.navigate(SCENE_NAME.CREATE_INVOICE);
  };

  return (
    <ListInvoiceScreenView
      dataListInvoice={dataListInvoice}
      handleStoreEndReached={handleStoreEndReached}
      isLoadMore={isLoadMore}
      handleSearchWithText={handleSearchWithText}
      sortOption={sortOption}
      handleSelectSort={handleSelectSort}
      handleNavigateCreateInvoice={handleNavigateCreateInvoice}
    />
  );
}
