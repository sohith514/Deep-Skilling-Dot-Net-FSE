import "./App.css";

import office1 from "./Images/office.jpg";
import office2 from "./Images/office2.png";
import office3 from "./Images/office3.png";

function App() {

  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office1
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Hyderabad",
      Image: office2
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Bangalore",
      Image: office3
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Office Space, at Affordable Range</h1>

      {officeSpaces.map((item, index) => (

        <div key={index} style={{ marginBottom: "40px" }}>

          <img
            src={item.Image}
            alt={item.Name}
            width="350"
            height="220"
          />

          <h2>Name: {item.Name}</h2>

          <h3
            style={{
              color: item.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>

        </div>

      ))}

    </div>
  );
}

export default App;