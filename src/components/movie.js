import React, { Component, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchMovie } from "../actions/movieActions";
import MovieDetail from "../components/moviedetail"
import { bindActionCreators } from 'redux';
import { Panel, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';

// support routing by creating a new component

class Movie extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedMovie == null) {
            dispatch(fetchMovie(this.props.movieId));
        }
    }

    render() {
        const ActorInfo = ({actors}) => {
            return actors.map((actor, i) =>
                <p key={i}>
                    <b>{actor.actorName}</b> {actor.characterName}
                </p>
            );
        }

        const ReviewInfo = ({reviews}) => {
            return reviews.map((review, i) =>
                <p key={i}>
                    <b>{review.username}</b>&nbsp; {review.review}
                    &nbsp;  <BsStarFill /> {review.rating}
                </p>
            );
        }

        const DetailInfo = ({currentMovie}) => {
            if (!currentMovie) {
                return <div>Loading....</div>
            }
            return (
                <Panel>
                    <Panel.Heading>Movie Detail</Panel.Heading>
                    <Panel.body><Image className="image" src={currentMovie.imageUrl} thumbnail /></Panel.body>
                    <ListGroup>
                        <ListGroupItem>{currentMovie.title}</ListGroupItem>
                        <ListGroupItem>
                            <ActorInfo actors={currentMovie.actors} />
                        </ListGroupItem>
                        <ListGroupItem><h4><BsFillStarFill/></h4> </ListGroupItem>
                    </ListGroup>
                </Panel>
            )
        }

        const mapStateToProps = (state, ownProps) => {
            console.log(ownProps);
            return {
                selectedMovie: state.movie.selectedMovie,
                movieId: ownProps.match.params.movieId
            }
        }
    }
}

export default Movie;

//function Movie(props) {
//    const [selectedMovie] = useState(props.selectedMovie);
//    const params = useParams();
//    const movieId = params.movieId;
//    console.log(movieId);
//    const dispatch = useDispatch();
//    if (selectedMovie == null) {
//        dispatch(fetchMovie(movieId));
//    }
//
//    return (<MovieDetail movieId={movieId} />)
//}

// export default Movie;