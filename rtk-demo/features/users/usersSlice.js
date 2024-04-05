const { createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");
const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.id));
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      (state.users = action.payload), (state.error = null);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = usersSlice.reducer;
module.exports.fetchUsers = fetchUsers;
