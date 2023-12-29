import {axiosInstance} from './index'

//Add a new theater

export const AddTheater = async(payload) =>{
    try{
        const response = await axiosInstance.post("/api/theaters/add-theater", payload)
        return response.data
    }catch(error){
        return error.response
    }
}

// get all theatres
export const GetAllTheaters = async () => {
    try {
      const response = await axiosInstance.get("/api/theaters/get-all-theaters");
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

// get all theatres by owner
export const GetAllTheatersByOwner = async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/api/theaters/get-all-theaters-by-owner",
        payload
      );
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

//update theaters
export const UpdateTheater = async (payload) => {
  try{
    const response = await axiosInstance.post("/api/theaters/update-theater", payload)
    return response.data
  }catch(error){
    return error.response
  }
}

//delete theaters
export const DeleteTheater = async (payload) =>{
  try{
    const response = await axiosInstance.post('/api/theaters/delete-theater', payload)
    return response.data
  }catch(error){
    return error.response
  }
}

//add shows

export const AddShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theaters/add-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all shows
export const GetAllShowsByTheater = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theaters/get-all-shows-by-theater",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};


// delete show
export const DeleteShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theaters/delete-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all theatres for a movie
export const GetAllTheatersByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theaters/get-all-theaters-by-movie",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get show by id
export const GetShowById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theaters/get-show-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}