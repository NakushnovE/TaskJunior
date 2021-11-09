import React, {useEffect, useState} from 'react';
import axios from "axios";


const useSetUrl = (url) => {
    const UrlApi = 'http://www.filltext.com/?rows=0&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const smallDataApi = 'http://www.filltext.com/?rows=12&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const bigDataApi = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const [userState, setUserState] = useState([]);
    const [loader, setLoader] = useState(true)

    const setUrl = () => {
    }
    useEffect(() => {
        axios.get(smallDataApi).then((res) => {
            setUserState(res.data);
            setLoader(false)
        });
    }, [setUserState]);
    return [{userState, setUserState, loader, setLoader}, setUrl]
};

export default useSetUrl;