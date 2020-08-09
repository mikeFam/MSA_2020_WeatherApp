import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
        return dispatch(setAlert('City is required!'));
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }

    const submitHandlerButton = () => {

        if(city.trim() === '') {
        return dispatch(setAlert('City is required!'));
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }


    return(
        <div className="hero is-light has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">                    
                    <Typography variant="h2" color = 'primary' gutterBottom>
                        {title}
                    </Typography></h1>
                    <form className="py-5" onSubmit={submitHandler}>
                        <input 
                        type="text"
                        className="input has-text-centered mb-2"
                        placeholder="Enter city name"
                        style={{maxWidth: 300}}
                        value={city}
                        onChange={changeHandler}
                        />
                        {/* <TextField
                        required
                        id="outlined-required"
                        label="City Name"
                        variant="outlined"
                        error={city === ""}
                        // onClick={() => setHasFocus(true)}
                        value={city}
                        onChange={e => changeHandler}
                        /> */}
                        <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<SearchIcon />} onClick= {submitHandlerButton}>
                        Search
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );  
}

export default Search;