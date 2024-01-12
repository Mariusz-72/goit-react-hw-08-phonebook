// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL =
//   'https://659803f8668d248edf23e9f6.mockapi.io/contacts/';

// export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
//   try {
//     const { data } = await axios.get('/contacts');
//     return data;
//   } catch (error) {
//     console.error(error);
//     return error.message;
//   }
// });



// export const addContact = createAsyncThunk(
//   'contacts/add',
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', text);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/delete',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/API/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add-contact',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete-contact',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);