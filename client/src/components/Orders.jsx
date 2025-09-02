import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    total: "",
    status_id: "",
  });

  const [editingId, setEditingId] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_URL}/orders`, {
        withCredentials: true,
      });
      setOrders(response.data.data);
    } catch (error) {
      console.error("Klaida gaunant orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      name: item.name,
      email: item.email,
      phone_number: item.phone_number,
      total: item.total,
      status_id: item.status_id,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({
      name: "",
      email: "",
      phone_number: "",
      total: "",
      status_id: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/orders/${editingId}`, form, {
          withCredentials: true,
        });
        console.log("Orders elementas sėkmingai atnaujintas!");
      } else {
        await axios.post(`${API_URL}/orders`, form, {
          withCredentials: true,
        });
        console.log("Orders elementas sėkmingai sukurtas!");
      }
      cancelEdit();
      fetchOrders();
    } catch (error) {
      console.error(
        `Klaida ${editingId ? "atnaujinant" : "kuriant"} meniu elementą:`,
        error
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/orders/${id}`, {
        withCredentials: true,
      });
      fetchOrders();
    } catch (error) {
      console.error("Klaida trinant orders elementą:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Orders</h2>

      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          type="text"
          placeholder="Pavadinimas"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Total"
          value={form.total}
          onChange={(e) => setForm({ ...form, total: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <select
          value={form.status_id}
          onChange={(e) => setForm({ ...form, status_id: e.target.value })}
          className="border p-2 w-full bg-white"
        >
          <option value="1">Gautas</option>
          <option value="2">Vykdomas</option>
          <option value="3">Paruoštas</option>
          <option value="4">Apmokėtas</option>
        </select>
        <button
          type="submit"
          className="bg-amber-400 px-4 py-2 rounded-md hover:bg-amber-500"
        >
          Create order
        </button>
      </form>

      <ul className="space-y-2">
        {orders.map((item) => (
          <li
            key={item.id}
            className="border p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <h3>{item.email}</h3>
              <p>Phone number: {item.phone_number}</p>
              <p>Total: {item.total}</p>
              <p>Status: {item.status_id}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
