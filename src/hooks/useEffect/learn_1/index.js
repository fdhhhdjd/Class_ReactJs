//* REACT
import React, { useState, useEffect } from "react";

//* LIBRARY
import axios from "axios";


function Learn_1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hàm này sẽ chạy sau khi component được render lần đầu tiên
    // Gọi API để tải dữ liệu mặc định
    fetchData("posts");
  }, []);

  const fetchData = (endpoint) => {
    setLoading(true); // Đánh dấu đang tải dữ liệu

    // Gọi API dựa trên endpoint được truyền vào
    axios
      .get(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => {
        // Cập nhật state "data" với dữ liệu từ API
        setData(response.data);
        // Đánh dấu rằng việc tải dữ liệu đã hoàn thành
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu từ API:", error);
        // Đánh dấu rằng việc tải dữ liệu đã hoàn thành (có lỗi)
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <button onClick={() => fetchData("posts")}>Get Post</button>
      <button onClick={() => fetchData("comments")}>Get Comment</button>
      <button onClick={() => fetchData("users")}>Get User</button>
      {loading ? (
        <div className="loading-indicator">
          <p>Đang tải dữ liệu...</p>
        </div>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title || post.body || post.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Learn_1;
