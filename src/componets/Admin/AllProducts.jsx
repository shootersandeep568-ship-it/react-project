import axios from "axios";
import React, { useEffect, useState } from "react";

function AllProducts() {
  const [api, setApi] = useState([]);
  const [update, setUpdate] = useState(null);

  async function handleSubmit() {
    try {
      const res = await axios.get(
        "http://localhost:8000/cart/Productapi"
      );
      setApi(res.data.AllProduct);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  const updateData = async (id, updatedItem) => {
    try {
      await axios.post(
        `http://localhost:8000/cart/updateData/${id}`,
        updatedItem
      );
      alert("Product Updated Successfully");
      setUpdate(null);
      handleSubmit();
    } catch (error) {
      console.log(error);
    }
  };



  const deleteallproduct = (id) => {
    console.log(id)
    axios.post(`http://localhost:8000/cart/deleteallproduct/${id}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <h1 className="heading">Admin Dashboard</h1>

      <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {api &&
              api.map((item, index) => (
                <React.Fragment key={item._id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <button
                        className="update-btn"
                        onClick={() => setUpdate(index)}
                      >
                        Update
                      </button>
                      <button className="delete-btn" onClick={() => deleteallproduct(item._id)} >
                        Delete
                      </button>
                    </td>
                  </tr>

                  {update === index && (
                    <tr>
                      <td colSpan="5">
                        <form
                          className="update-form"
                          onSubmit={(e) => {
                            e.preventDefault();
                            updateData(item._id, item);
                          }}
                        >
                          <input
                            type="text"
                            defaultValue={item.title}
                            onChange={(e) =>
                              (item.title = e.target.value)
                            }
                            placeholder="Title"
                          />

                          <input
                            type="text"
                            defaultValue={item.description}
                            onChange={(e) =>
                            (item.description =
                              e.target.value)
                            }
                            placeholder="Description"
                          />

                          <input
                            type="number"
                            defaultValue={item.price}
                            onChange={(e) =>
                              (item.price = e.target.value)
                            }
                            placeholder="Price"
                          />

                          <button type="submit">
                            Save
                          </button>
                        </form>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllProducts;