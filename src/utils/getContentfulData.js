import Axios from "axios";
import React, { useContext } from "react";
import { langContext } from "../Context/langContext";

/* const contentful = require("contentful");

const space = 'ruuwpi1fhiq5';
const accessToken = '5vdWq97e7p4ag333-kSrsmG2htFJDPY091ve9BRw4gI';
const client = contentful.createClient({
    space,
    accessToken
}) */

export const getContentfulData = async (content_type, limit, locale) => {
  try {
       const data =  (await Axios.get(`http://localhost:4000/contentful/${content_type}&${limit}&${locale || 'default'}`)).data
      console.log(data)
       return data.items
        
      } catch (error) {
        console.log(error)
      }
}

export const getAllContentFulData = async (content_type, locale) => {
  try {
    const data =  (await Axios.get(`http://localhost:4000/contentful/${content_type}&0&${locale || 'default'}`)).data
      console.log(data)
    return data.items;
    
  } catch (error) {
    console.log(error)
  }
}

export const getContentById = async (id, locale) => {
  try {
    
    const res =  (await Axios.get(`http://localhost:4000/getContentById/${id}&${locale || 'default'}`)).data
    console.log(res)
    return res.fields
    
    } catch (error) {
      console.log(error)
    }
  }
  
  
