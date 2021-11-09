import React from 'react';
import "./FullInfoPerson.css"

const FullInfoPerson = ({infoPerson}) => {

    const StreetAddress = infoPerson&&infoPerson.address? infoPerson.address.streetAddress : null
    const CityAddress = infoPerson&&infoPerson.address? infoPerson.address.city : null
    const StateAddress = infoPerson&&infoPerson.address? infoPerson.address.state : null
    const ZipAddress = infoPerson&&infoPerson.address? infoPerson.address.zip : null

//хз как это работает


    return (
        <div className="infoPerson">
            <p><b>id:</b> {infoPerson.id}</p>
            <p><b>firstName:</b> {infoPerson.firstName}</p>
            <p><b>lastName:</b> {infoPerson.lastName}</p>
            <p><b>email:</b> {infoPerson.email}</p>
            <p><b>phone: </b>{infoPerson.phone}</p>
            <p><b><i>address:</i></b></p>
            <p><b>streetAddress:</b> {StreetAddress}</p>
            <p><b>city:</b> {CityAddress}</p>
            <p><b>state:</b> {StateAddress}</p>
            <p><b>zip: </b>{ZipAddress}</p>
        </div>
    );
};

export default FullInfoPerson;