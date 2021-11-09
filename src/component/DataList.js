import React, {useState} from 'react';
import "./DataList.css"
import sortDown from "../icon/sortDown.svg"
import sortUp from "../icon/sortUp.svg"


const DataList = ({userState, handleSortData, directionSort, showMoreInfo}) => {

    const [fieldData, setFieldData] = useState('')

    const Sort = () => directionSort? <img src={sortUp}/>: <img src={sortDown} />
    const direction = (field) => {
        handleSortData(field)
        setFieldData(field)
    }

    return (
        <table className="hatTable">
            <thead>
            <tr>
                <th  onClick={()=> {direction('id')}}>
                    id {fieldData == 'id'? <Sort/>: null}
                </th>
                <th className={directionSort? "sortUp": "sortDown"} onClick={()=> {direction('firstName')}}>
                    firstName
                    id {fieldData == 'firstName'? <Sort/>: null}
                </th>
                <th onClick={()=> {direction('lastName')}}>
                    lastName {fieldData == 'lastName'? <Sort/>: null}
                </th>
                <th onClick={()=> {direction('email')}}>
                    email {fieldData == 'email'? <Sort/>: null}
                </th>
                <th onClick={()=> {direction('phone')}}>
                    phone {fieldData == 'phone'? <Sort/>: null}
                </th>
            </tr>
            </thead>
                <tbody>
                {userState.map((person)=>
                    <tr>
                        <td onClick={()=>showMoreInfo(person)}>{person.id}</td>
                        <td onClick={()=>showMoreInfo(person)}>{person.firstName}</td>
                        <td onClick={()=>showMoreInfo(person)}>{person.lastName}</td>
                        <td onClick={()=>showMoreInfo(person)}>{person.email}</td>
                        <td onClick={()=>showMoreInfo(person)}>{person.phone}</td>
                    </tr>
                    )
                }
                </tbody>
        </table>

    );
};

export default DataList;