import axios from "axios";
import React, { useEffect, useState } from "react";

function AllProducts() {
  const [api, setApi] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);

  async function getProducts() {
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
    getProducts();
  }, []);

  const updateData = async (id, updatedItem) => {
    try {
      await axios.post(
        `http://localhost:8000/cart/updateData/${id}`,
        updatedItem
      );
      alert("👻 Product Updated Successfully");
      setUpdateIndex(null);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.post(
        `http://localhost:8000/cart/deleteallproduct/${id}`
      );
      alert("💀 Product Deleted");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="spooky-heading">💀 Admin Dashboard</h1>

      <div className="spooky-table-container">
        <table className="spooky-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {api.map((item, index) => (
              <React.Fragment key={item._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <button
                      className="spooky-update"
                      onClick={() => setUpdateIndex(index)}
                    >
                      👻 Update
                    </button>

                    <button
                      className="spooky-delete"
                      onClick={() => deleteProduct(item._id)}
                    >
                      💀 Delete
                    </button>
                  </td>
                </tr>

                {updateIndex === index && (
                  <tr>
                    <td colSpan="5">
                      <form
                        className="spooky-form"
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
                        />

                        <input
                          type="text"
                          defaultValue={item.description}
                          onChange={(e) =>
                            (item.description = e.target.value)
                          }
                        />

                        <input
                          type="number"
                          defaultValue={item.price}
                          onChange={(e) =>
                            (item.price = e.target.value)
                          }
                        />

                        <button type="submit" className="spooky-save">
                          🔥 Save
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