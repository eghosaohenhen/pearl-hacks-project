import dog from '../assets/wide_dog_cover2_.jpg';
import React from 'react'
import {  Button, Checkbox, Form, Message} from 'semantic-ui-react';
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
                <input placeholder='Major' />
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