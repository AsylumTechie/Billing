import React, { useState, useEffect } from "react";
import DefaultLayout from "./../components/DefaultLayout";
import axios from "axios";

const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);
  //useEffect
  useEffect(() => {
    const getAllItems = async () => {
      try {
        const { data } = await axios.get("/api/items/get-item");
        setItemsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);
  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <button onclick="onpress"></button>
    </DefaultLayout>
  );
};

export default Homepage;
