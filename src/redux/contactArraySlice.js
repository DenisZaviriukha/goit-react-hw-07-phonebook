import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "components/api";

export const contactArraySlice = createSlice({
    name: "contactArray",
    // initialState: [],
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
        filters: '',
        // isLoggedIn: false,
        // // isLoggedIn: true,
        // token: null,
    },
    
    // reducers: {
    //     addContact(state, action) {
    //         state.push(action.payload);
    //     },

    //     deleteContact(state, action) {
    //         return state.filter(contact => contact.id !== action.payload)
    //     },
    // },
    extraReducers: {

        [fetchContacts.pending](state) {
            state.contacts.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },

        //----------------------------------------

        [addContact.pending](state) {
            state.contacts.isLoading = true;
        },
        [addContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(action.payload); 
        },
        [addContact.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },

        //----------------------------------------
        
        [deleteContact.pending](state) {
            state.contacts.isLoading = true;
        },
        [deleteContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id ) 
        },
        [deleteContact.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
    }

})

export const contactReducer = contactArraySlice.reducer;
