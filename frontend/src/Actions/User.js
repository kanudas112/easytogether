import axios from "axios";

export const loginUser = (values) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
   
    const { data } = await axios({
        method: "post",
        url: "/api/v1/login",
        data: values,
        headers: {
          "Content-Type": "application/json",
        },
      });

    dispatch({
        type:"LoginSuccess",
        payload:data

    })
  } catch (error) {

    dispatch({
        type:"LoginFailure",
        payload:error.message
    })
  }
};



export const loadUser = (values) => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
     
      const { data } = await axios({
          method: "get",
          url: "/api/v1/me",
        });
  
      dispatch({
          type:"LoadUserSuccess",
          payload:data
  
      })
    } catch (error) {
  
      dispatch({
          type:"LoadUserFailure",
          payload:error.message
      })
    }
  };