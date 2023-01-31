
import './Profile.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../common/Input/Input'
import { Select } from '../../common/Select/Select'
import { TextArea } from '../../common/TextArea/TextArea'
import { Loader } from '../../common/Loader/Loader'
import { regFormValidations } from '../../validations/regFormValidations'
import { ServerCall } from '../../shared/ServerCall'
import { toast } from 'react-toastify'
import { appStore } from '../../store/appStore'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const inputValues = [{
  lbl: 'User Name',
  tag: 'input',
  type: 'text',
  name: 'uid',
  val: '',
  errMsg: '',
  isShow: false
},
{
  lbl: 'Password',
  tag: 'input',
  type: 'text',
  name: 'pwd',
  val: '',
  errMsg: '',
  isShow: false
},
{
  lbl: 'Phone',
  tag: 'input',
  type: 'number',
  name: 'phone',
  val: '',
  errMsg: '',
  isShow: false
},
{
  lbl: 'Gender',
  tag: 'input',
  type: 'radio',
  name: 'gender',
  val: '',
  values: ['M', 'F'],
  options: ['Male', 'Female'],
  errMsg: '',
  isShow: false
},
{
  lbl: 'Hobbies',
  tag: 'input',
  type: 'checkbox',
  name: 'hobbies',
  val: '',
  values: ['CRIC', 'FB', 'HOC'],
  options: ['Cricket', 'FootBall', 'Hockey'],
  errMsg: '',
  isShow: false
},
{
  lbl: 'Country',
  tag: 'select',

  name: 'country',
  val: '',
  values: ['IND', 'CANADA', 'USA'],
  options: ['INDIA', 'CANADA', 'USA'],
  errMsg: '',
  isShow: false
},
{
  lbl: 'Address',
  tag: 'textarea',
  type: 'textarea',
  name: 'address',
  val: '',
  errMsg: '',
  isShow: false
}

]

export const Profile = () => {
  const [temp, setTemp] = useState('');
const [showPop, setShowPop]=useState(false);

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    appStore.dispatch({ type: 'LOADER', payload: true })
    ServerCall.sendGet(`reg/get-std-by-id?id=${localStorage.id}`)
    .then((res)=>{
      appStore.dispatch({ type: 'LOADER', payload: false })
  console.log(res)
  let stdInfo=res.data;
  inputValues.forEach((obj)=>{
    obj.val=stdInfo[obj.name]
  })
  fnPrepareTemplate();
    })
    .catch((res)=>{
      appStore.dispatch({ type: 'LOADER', payload: false })
      console.log(res)
        })
   },[])

  const fnPrepareTemplate = () => {
    let inputControlsArray = inputValues.map((obj,index) => {
      switch (obj.tag) {
        case 'input':
          return <Input key={index} data={{ ...obj, fnChange }} />
        case 'select':
          return <Select key={index} data={{ ...obj, fnChange }}></Select>
        case 'textarea':
          return <TextArea key={index} data={{ ...obj, fnChange }}></TextArea>


      }
    })

    setTemp(inputControlsArray)

  }
  const fnChange = (eve) => {

    const { name, value, type, checked, id } = eve.target;
    //console.log(eve.target);
    let inputObj = inputValues.find((obj) => {

      return obj.name == name

    })

    if (type == 'checkbox') {
      let selHobbies = []
      if (inputObj.val) {
        selHobbies = inputObj.val.split(',')
      }
      if (checked) {
        selHobbies.push(id)



      }
      else {
        selHobbies.splice(selHobbies.indexOf(id), 1);


      }
      inputObj.val = selHobbies.join();

    } else {
      inputObj.val = value;

    }

    regFormValidations(inputObj);
    fnPrepareTemplate()

    //inputObj.isShow=value ? false : true





  }



  const fnUpdate = () => {
    //url:https://serverapp.herokuapp.com/reg/update-std/:id
    //method:put
    //data format: { payload:{}   }

    let isFormValid = true;
    let data = {};
    inputValues.forEach((inputObj) => {

      regFormValidations(inputObj)

      const { name, val, errMsg } = inputObj;

      data[name] = val;


      if (errMsg) {
        isFormValid = false;
      }
    })
    fnPrepareTemplate();
    if (!isFormValid) return

    appStore.dispatch({ type: 'LOADER', payload: true })
    ServerCall.sendPut(`reg/update-std/${localStorage.id}`, { payload: data })
      .then((res) => {
        appStore.dispatch({ type: 'LOADER', payload: false })
        const { acknowledged, modifiedCount } = res.data
        if (acknowledged && modifiedCount) {
          toast.success('Updated Successfully')
         
          
        }
        else {
          toast.error('Not Updated, try again')
        }

      })
      .catch((err) => {
        appStore.dispatch({ type: 'LOADER', payload: false })
        toast.error('Something Went Wrong')
      })


  }

const fnTerminate=()=>{
  setShow(false)
  appStore.dispatch({ type: 'LOADER', payload: true })
  ServerCall.sendDelete(`reg/delete-std/${localStorage.id}`)
  .then((res) => {
    console.log(res.data)
    appStore.dispatch({ type: 'LOADER', payload: false })
    const { acknowledged, deletedCount } = res.data
    if (acknowledged && deletedCount) {
      toast.success('Account Deleted Successfully')
      localStorage.clear();
appStore.dispatch({type:'AUT', isLoggedIn:false})
      
    }
    else {
      toast.error('Account not deleted, Please try again')
    }

  })
  .catch((err) => {
    appStore.dispatch({ type: 'LOADER', payload: false })
    toast.error('Something Went Wrong')
  })
}

  return (
    <div className='container-fluid'>

      <h1 className='text-centre mb-4 mt-3'>Profile Page</h1>
      {temp}
      <div className='row '>
        <div className='offset-sm-5 col-sm-7 text-start'>
          <button onClick={fnUpdate} className="btn btn-outline-dark me-3">Update</button>
          <button onClick={handleShow} className="btn btn-outline-dark me-3">Delete</button>
        </div>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>DELETE PROFILE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete your account?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={fnTerminate}>Delete</Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  )
}


