import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import qs from "qs";
const CardLayout = styled.div`
  font-family: "SF Pro Display", sans-serif;
  width: 500px;
  font-size: 18px;
  margin: 12px 0;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
`;

const FlexElements = styled.div`
  display: flex;
  align-items: baseline;
`;
const CommentId = styled.div`
  margin: 20px 12px 12px 20px;
  height: 21px;
  font-weight: 700;
  line-height: 21px;
  color: #212529;
`;

const Email = styled.div`
  height: 21px;
  margin: 0 12px 12px 20px;
  font-weight: 700;
  line-height: 21px;
  color: #212529;
`;

const CommonText = styled.div`
  height: 21px;
  font-weight: 400;
  line-height: 21px;
`;

const CommentTitle = styled.div`
  height: 21px;
  line-height: 21px;
  font-weight: 700;
  margin: 0 0 2px 20px;
`;

const Content = styled.div`
  margin: 0px 20px 20px;
  line-height: 21px;
  font-weight: 400;
`;
const Card = () => {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalitems] = useState([]);
  useEffect(() => {
    async function getTotal() {
      await axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => setTotalitems(res.data))
        .catch((error) => console.log(error));
    }
    getTotal();
    fetchData({ _page: items.length / 10 + 1 });
  }, []);

  async function fetchData(page) {
    if (totalItems.length === items.length) return;
    const params = qs.stringify(page);
    let url = "https://jsonplaceholder.typicode.com/comments";
    // let url = "https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10";

    if (page) {
      url = `${url}?${params}&_limit=10`;
    }

    await axios
      .get(url)
      .then((res) => setItems([...items, ...res.data]))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <InfiniteScroll
        pageStart={1}
        loadMore={() => fetchData({ _page: items.length / 10 + 1 })}
        hasMore={true || false}
        useWindow={true}
        loader={
          totalItems?.length === items?.length ? null : (
            <div className="loader" key={0}>
              Loading ...
            </div>
          )
        }
      >
        {items.map((item, index) => (
          <div key={index}>
            <CardLayout>
              <FlexElements>
                <CommentId>Comment Id</CommentId>
                <CommonText>{item.id}</CommonText>
              </FlexElements>

              <FlexElements>
                <Email>Email</Email>
                <CommonText>{item.email}</CommonText>
              </FlexElements>
              <CommentTitle>Comment</CommentTitle>
              <Content>{item.body}</Content>
            </CardLayout>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Card;
