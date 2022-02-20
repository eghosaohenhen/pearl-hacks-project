import dog from '../assets/wide_dog_cover2_.jpg';
import React from 'react'
import {  Button, Checkbox, Form, Message, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function Main() {
    const [success, setSuccess] = React.useState("");
    const [error, setError] = React.useState("");
    const handleSubmit = () => {
        // UserApi.addUser(
        //   username,
        //   email
        // )
        console.log('hi')
        .then((res) => {
            if (res) {
            setSuccess("Added Student");
            setError(null);
            // setUsername("");
            // setEmail("");
            // props.getUserData();
            }
        })
        .catch((err) => {
            setSuccess(null);
            setError("Could not add student");
            // setUsername("");
            // setEmail("");
        });
    };
    const countryOptions = [
        { key: 'af', value: 'af', text: 'Art History' },
        { key: 'ax', value: 'ax', text: 'Computer Science' },
        { key: 'al', value: 'al',  text: 'Economics' },
        { key: 'dz', value: 'dz',  text: 'Business' },
        { key: 'as', value: 'as', text: 'Math' },
        { key: 'ad', value: 'ad', text: 'Womens and Gender Studies' },
        { key: 'ao', value: 'ao', text: 'History' },
        { key: 'ai', value: 'ai', text: 'English' },
        { key: 'ag', value: 'ag', text: 'Biology' },
        { key: 'ar', value: 'ar', text: 'Civil Engineering' },
        { key: 'am', value: 'am', text: 'Public Health' },
        { key: 'aw', value: 'aw', text: 'Biomedical Engineering' },
      ]
      const yearOptions = [
              { text: 'First-Year' },
              { text: 'Second-Year' },
              { text: 'Third-Year' },
              { text: 'Fourth-Year' },
            ]
    return(
        <div>
            <img src={dog} className="App-logo" alt="logo" />

            <Form>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
                <label>Major</label>
                <Dropdown
    placeholder='Select Major'
    fluid
    search
    selection
    options={countryOptions}
  />
  </Form.Field>
  <Form.Field>
                  <label>Year</label>
                  <Dropdown
      placeholder='Select Year'
      fluid
      search
      selection
      options={yearOptions}
    />
            </Form.Field>
            <Form.Field>
                <Checkbox label='Do you have a minor?' class="ui red header"/>
            </Form.Field>
            <Link to="/Courses">
                <Button type='submit' color = 'green' onClick={(e) => {
                //setOpen(false);
                handleSubmit();
                }}>Submit</Button>
            </Link>
            </Form>
            <div id ="message">
                {success &&
                    <Message success compact className = "message">{success}</Message>
                }
                {error &&
                    <Message error compact className = "message">{error}</Message>
                }
            </div>
        </div>
    )
}
export default Main