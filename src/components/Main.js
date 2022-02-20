import dog from '../assets/wide_dog_cover2_.jpg';
import React from 'react'
import {  Button, Checkbox, Form, Message, Dropdown} from 'semantic-ui-react';

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
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al',  text: 'Albania' },
        { key: 'dz', value: 'dz',  text: 'Algeria' },
        { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
        { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
        { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
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
                <Checkbox label='Do you have a minor?' />
            </Form.Field>
            <Button type='submit' color = 'green' onClick={(e) => {
                //setOpen(false);
                handleSubmit();
            }}>Submit</Button>
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