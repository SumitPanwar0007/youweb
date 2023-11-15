import React,{createContext,useState,useEffect} from "react";
import {fetchDataFromApi} from '../utils/api';
export const Context= createContext();

export const AppContext=(props)=>{
    const [loading , setLoading]=useState(false);
    const [searchResults , setsearchResults]=useState([]);
    const [selectCategories , setSelectCategories]=useState("New");
    const [mobileMenu , setMobileMenu]=useState(false); 

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories);
    },[selectCategories]);

    const fetchSelectedCategoryData= (query)=>{
            setLoading(true);
            fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{

            setsearchResults(contents);
            setLoading(false);
        });
    };
        return(
            <Context.Provider
                value={{
                    loading,setLoading,
                    searchResults,setsearchResults,
                    selectCategories,setSelectCategories,
                    mobileMenu,setMobileMenu,
                }}
                >
                    {props.children}
            </Context.Provider>
        );

};