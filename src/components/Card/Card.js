import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import qs from "qs";
import {
  CardLayout,
  FlexElements,
  CommentId,
  Email,
  CommonText,
  CommentTitle,
  Content,
} from "./Card.styles";

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
