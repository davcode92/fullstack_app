import axios from "axios";
import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from "./actionTypes";

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get("/get");
        dispatch({
            type: GET_USERS,
            payload: res.data,
          });
        } catch (error) {
            alert("get error");
          }
      };
      
      export const addUser = (newUser) => async (dispatch) => {
        try {
            const {data} = await axios.post("/add", newUser);
            dispatch({
                type: ADD_USER,
                payload: data,
              });
            } catch (error) {
                alert("add error");
              }
          
            };
            export const editUser = (editedUser) => async (dispatch) => {
              try {
                const {data} = await axios.put(`/update/${editedUser._id}`, editedUser);
                dispatch({
                    type: EDIT_USER,
                    payload: data,
                  });

                } catch (error) {
                      alert("update error");
            }
        };

        export const deleteUser = (_id) => async (dispatch) => {
          try {
            await axios.delete(`/delete/${_id}`);
            dispatch({
                type:DELETE_USER,
                payload:_id,
              });

            } catch (error) {
                  alert("delete error");
        }
    };