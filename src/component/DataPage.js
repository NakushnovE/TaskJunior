import React, {useEffect, useState} from 'react';
import axios from "axios";
import DataList from "./DataList";
import "./Navbar.css"
import LoaderSvg from "../loader/LoaderSvg"
import FullInfoPerson from "./FullInfoPerson";
import useSetUrl from "../hooks/useSetUrl";

const DataPage = () => {

    //const smallDataApi = 'http://www.filltext.com/?rows=12&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
   // const bigDataApi = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
   // const [userState, setUserState] = useState([]);
    //const [loader, setLoader] = useState(true)
    const [directionSort, setDirectionSort] = useState(true)
    const [infoPerson, setInfoPerson] = useState({})


    const [{userState, setUserState, loader, setLoader}, SetUrl] = useSetUrl('url')




    const handleSortData = (field) => {
        setDirectionSort(!directionSort)
        if(directionSort) {
            setUserState([...userState.sort(
                (a, b ) => {return a[field]>b[field]?1:-1}
            )])
        } else {
            setUserState([...userState.sort(
                (a, b ) => {return a[field]<b[field]?1:-1}
            )])
        }
}
    const showMoreInfo = (person) => {
        setInfoPerson(person)
 }

    return (
        <div>
            <div className="navbar">
                <div className="navbar-btn">
                    <button >Small</button>
                    <button>Big</button>
                </div>
            </div>
            <div className="table">
                {loader? <LoaderSvg/>:<DataList
                    userState={userState}
                    handleSortData={handleSortData}
                    directionSort={directionSort}
                    showMoreInfo={showMoreInfo}/>
                }
            </div>
            <FullInfoPerson
                infoPerson={infoPerson}
            />
        </div>

    );
};

export default DataPage;