import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"

export default function Adminka() {
    const account = useSelector((state) => state.users.adminUser)
    const dispatch = useDispatch()
    let [show,setShow] = useState(false)

    const selectedUser = useSelector((state) => state.users.editUsers)
    let [chosenUser,setChosenUser] = useState(selectedUser)

    useEffect(() => {
        console.log(1, chosenUser)
    }, [chosenUser])

    function changeTelNumber(e) {
        setChosenUser(prev => {
            return {...prev, telnumber: e.target.value}
        })
    }

    function changePassword(e) {
        setChosenUser(prev => {
            return {...prev, password: e.target.value}
        })
    }

    function saveChanges() {
        dispatch({type: 'UPDATE_USER', payload: chosenUser})
    }





    const AccountList = (props) => {
        return(
            <div>
                <div className="img-and-spisok">
                    <img className="editsvg" onClick={() => {editUser(props.user)}} src="./assets/photos/Edit.svg"/>
                    {!show}
                    {show && 
                    <div className="editPage">
                        <div className="editPagePandVector">
                            <p className="pedit">Редактирование аккаунта</p>
                            <img className="rectangleEdit" src="./assets/photos/rectangle.svg"/>
                        </div>
                        <div className="editPageInputs">
                             <input className="editInput1" placeholder="Телефон" value={selectedUser.telnumber} onChange={(e) => {changeTelNumber(e)}}/>
                            <input className="editInput2" placeholder="Пароль" value={selectedUser.password} onChange={(e) => {changePassword(e)}}/>
                        </div>
                        <button type="button" className="editBtnSave"><p className="pEditBtn" onClick={saveChanges}>Сохранить</p></button>
                    </div>
                        }
                </div>
                <div className="data">
                    <p></p>
                    <p>{props.user.telnumber}</p>
                    <p>{props.user.password}</p>
                </div>
            </div>
        )
    }

    function clickHandler() {
        setShow(!show)
    }
    function editUser(user) {
        dispatch({type: 'EDIT_USER', payload: user})
        clickHandler()
    }

    return(
        <div className="container7">
            <div className="adminPanel">
                <div className="adminPanelLeft">
                    <img src="./assets/photos/accountFoto.png"/>
                </div>
                <div className="adminPanelRight">
                    <AccountList user={account}/>
                </div>
            </div>
        </div>
    )
}