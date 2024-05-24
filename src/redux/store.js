import { createSlice } from "@reduxjs/toolkit";


const task = createSlice ({
    contacts: {
        items: [],
      },
      filters: {
        name: "",
      },
})