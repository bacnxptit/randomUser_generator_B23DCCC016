import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: {
      first: "John",
      last: "Doe"
    },
    location: {
      street: "123 Main St",
      city: "Springfield",
      country: "USA"
    },
    email: "john.doe@example.com",
    phone: "123-456-7890"
  });

  const [currentInfo, setCurrentInfo] = useState("name"); // Trạng thái để hiển thị thông tin

  const handleClick = (infoType) => {
    setCurrentInfo(infoType);
  };

  const renderInfo = () => {
    switch (currentInfo) {
      case "name":
        return <h1>{data.name.first} {data.name.last}</h1>;
      case "location":
        return <h1>{data.location.street}, {data.location.city}, {data.location.country}</h1>;
      case "email":
        return <h1>{data.email}</h1>;
      case "phone":
        return <h1>{data.phone}</h1>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div 
        style={{ width: 100, height: 50, backgroundColor: "green", cursor: "pointer", marginBottom: 10 }}
        onClick={() => handleClick("name")}
      >
        Tên
      </div>

      <div 
        style={{ width: 100, height: 50, backgroundColor: "blue", cursor: "pointer", marginBottom: 10 }}
        onClick={() => handleClick("location")}
      >
        Địa chỉ
      </div>

      <div 
        style={{ width: 100, height: 50, backgroundColor: "orange", cursor: "pointer", marginBottom: 10 }}
        onClick={() => handleClick("email")}
      >
        Email
      </div>

      <div 
        style={{ width: 100, height: 50, backgroundColor: "red", cursor: "pointer" }}
        onClick={() => handleClick("phone")}
      >
        Số điện thoại
      </div>

      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        {renderInfo()}
      </div>
    </div>
  );
}

export default App;
