import { createSlice } from "@reduxjs/toolkit"

export const contactArraySlice = createSlice({
    name: "contactArray",
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push(action.payload);
        },

        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        },
    }
})