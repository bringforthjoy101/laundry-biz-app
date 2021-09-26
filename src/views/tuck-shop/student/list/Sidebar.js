// ** Custom Components
import Sidebar from '@components/sidebar'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { swal, apiRequest } from '@utils'
import { getAllData, getFilteredData } from '../store/action'

// ** Third Party Components
import { Button, FormGroup, Label, FormText, CustomInput } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    email: '',
    type: '',
    className: '',
    level: '',
    group: '',
    avatar: 'https://res.cloudinary.com/bringforthjoy/image/upload/v1632178397/2.c8691d67.png',
    studentId: ''
  })

  const uploadImage = async (event) => {
    console.log('hi')
    event?.preventDefault()
    console.log(event)
      const formData = new FormData()
      formData.append("image", event.target.files[0])
      try {
        const response = await apiRequest({
          url: "/upload-images",
          method: "POST",
          body: formData
        })
        if (response) {
          if (response?.data?.status) {
            const avatar = response.data.data
            setUserData({ ...userData, avatar })
          } else {
            swal("Oops!", response.data.message, "error")
          }
        } else {
          swal("Oops!", "Something went wrong with your image.", "error")
        }
      } catch (error) {
        console.error({ error })
      }
    // }
  }

  // ** Function to handle form submit
  const onSubmit = async (event, errors) => {
    event.preventDefault()
    console.log({errors})
    if (errors && !errors.length) {
      console.log({userData})
      const body = JSON.stringify(userData)
      try {
        const response = await apiRequest({url:'/students/create', method:'POST', body}, dispatch)
        console.log({response})
        if (response.data.status) {
            swal('Great job!', response.data.message, 'success')
            dispatch(getAllData())
            toggleSidebar()
        } else {
          swal('Oops!', response.data.message, 'error')
        }
      } catch (error) {
        console.error({error})
      }
    }
  }

    return (
      <Sidebar
        size='lg'
        open={open}
        title='New Student'
        headerClassName='mb-1'
        contentClassName='pt-0'
        toggleSidebar={toggleSidebar}
      >
        <AvForm onSubmit={onSubmit}>
          <FormGroup>
            <Label for='firstName'>First Name</Label>
            <AvInput 
              name='firstName' 
              id='firstName' 
              placeholder='John Doe' 
              value={userData.firstName}
              onChange={e => setUserData({...userData, firstName: e.target.value})}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label for='lastName'>Last Name</Label>
            <AvInput 
              name='lastName' 
              id='lastName' 
              placeholder='johnDoe99' 
              value={userData.lastName}
              onChange={e => setUserData({...userData, lastName: e.target.value})}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label for='otherName'>Other Name</Label>
            <AvInput 
              name='otherName' 
              id='otherName' 
              placeholder='Other Name' 
              value={userData.otherName}
              onChange={e => setUserData({...userData, otherName: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <AvInput 
              type='email' 
              name='email' 
              id='email' 
              placeholder='john.doe@example.com' 
              value={userData.email}
              onChange={e => setUserData({...userData, email: e.target.value})}
              required 
            />
            <FormText color='muted'>You can use letters, numbers & periods</FormText>
          </FormGroup>
          <FormGroup>
            <Label for='studentId'>Student ID</Label>
            <AvInput 
              name='studentId' 
              id='studentId' 
              placeholder='Student ID' 
              value={userData.studentId}
              onChange={e => setUserData({...userData, studentId: e.target.value})}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label for='role'>Student Type</Label>
            <AvInput 
              type='select' 
              id='type' 
              name='type' 
              value={userData.type}
              onChange={e => setUserData({...userData, type: e.target.value})}
              required
            >
              <option value=''>Select Student Type</option>
              <option value='boarding'>Boarding</option>
              <option value='day'>Day</option>
            </AvInput>
          </FormGroup>
          <FormGroup>
            <Label for='role'>Student Class</Label>
            <AvInput 
              type='select' 
              id='className' 
              name='className' 
              value={userData.className}
              onChange={e => setUserData({...userData, className: e.target.value})}
              required
            >
              <option value=''>Select Student Class</option>
              <option value='junior'>Junior (JSS)</option>
              <option value='senior'>Senior (SS)</option>
            </AvInput>
          </FormGroup>
          <FormGroup>
            <Label for='role'>Student Level</Label>
            <AvInput 
              type='select' 
              id='level' 
              name='level' 
              value={userData.level}
              onChange={e => setUserData({...userData, level: e.target.value})}
              required
            >
              <option value=''>Select Student Level</option>
              <option value='1'>One (1)</option>
              <option value='2'>Two (2)</option>
              <option value='3'>Three (3)</option>
            </AvInput>
          </FormGroup>
          <FormGroup>
            <Label for='role'>Student Group</Label>
            <AvInput 
              type='select' 
              id='group' 
              name='group' 
              value={userData.group}
              onChange={e => setUserData({...userData, group: e.target.value})}
              required
            >
              <option value=''>Select Student Group</option>
              <option value='A'>A</option>
              <option value='W'>W</option>
              <option value='R'>R</option>
            </AvInput>
          </FormGroup>
          <FormGroup>
            <Label for='image'>Student Image</Label>
            <CustomInput type='file' id='image' name='image' accept='image/*' onChange={e => uploadImage(e)}  />
          </FormGroup>
          <Button type='submit' className='mr-1' color='primary'>
            Submit
          </Button>
          <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </AvForm>
      </Sidebar>
    )
}


export default SidebarNewUsers