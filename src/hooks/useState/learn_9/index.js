//* REACT
import React, { useState } from "react";

//* STYLE
import "./style.css";

const UpdateImg = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader(); //* Đọc các nguồn dữ liệu trên máy tính của người dùng
      //* onloadend: được kích hoạt khi quá trình đọc kết thúc, thành công hoặc không thành công
      reader.onloadend = () => {
        //*result: Nội dung của nguồn dữ liệu sau khi đọc thành công
        setImgPreview(reader.result);
      };
      //*readAsDataURL: Bắt đầu đọc nội dung của blobOrFile, một khi hoàn thành, fileReader.result
      //* sẽ là một URL đại diện cho dữ liệu đọc được.
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <div className="app">
        <div className="container">
          {error && <p className="errorMsg">File not supported</p>}
          <div
            className="imgPreview"
            style={{
              background: imgPreview
                ? `url("${imgPreview}")no-repeat center/cover`
                : "#131313",
            }}
          >
            <>
              {!imgPreview && (
                <>
                  <p>Add an image</p>
                  <label htmlFor="fileUpload" className="customFileUpload">
                    Choose file
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handleImageChange}
                  />
                  <span>(jpg, jpeg or png)</span>
                </>
              )}
            </>
          </div>
          {imgPreview && (
            <button onClick={() => setImgPreview(null)}>Remove image</button>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateImg;