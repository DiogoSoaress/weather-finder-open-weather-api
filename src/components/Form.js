import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        {/* <select name="city" defaultValue="Porto">
            <option value="Lisboa">Lisboa</option>
            <option value="Porto">Porto</option>
            <option value="Barcelona">Barcelona</option>
        </select> */}
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>
)

export default Form;