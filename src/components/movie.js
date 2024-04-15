import React, { Component, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchMovie } from "../actions/movieActions";
import MovieDetail from "../components/moviedetail"
import { bindActionCreators } from 'redux';
import { Glyphicon, Panel, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';

// support routing by creating a new component

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchMovie } from "../actions/movieActions";
import MovieDetail from "../components/moviedetail"

// support routing

function Movie(props) {
    const [selectedMovie] = useState(props.selectedMovie);
    const params = useParams();
    const title = params.title;
    console.log(title);
    const dispatch = useDispatch();
    if (selectedMovie == null) {
        dispatch(fetchMovie(title));
    }

    return (<MovieDetail title={title} />)
}

export default Movie;