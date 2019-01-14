import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, updateCharacterList, deleteNewCharacterList } from '../redux/actions';
import CharacterList from '../presentational/CharacterList';

class NewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newCharacterList: [],
            newUserButtonDisabled: false
        }
    }

    handleNewUserButton = async () => {

        this.setState({ newUserButtonDisabled: true })
        await this.props.dispatch(updateUser(this.props.userApp.accessToken, this.props.userApp.id))
        
        let newState = this.props.userApp.newCharacterList.map( (object) => { return Object.assign({}, object, { checked: false })})
        this.setState({ newCharacterList: newState })
    
    }

    handleChange = (i) => (event) => {
        const newState = this.state.newCharacterList.map((char, id) => {
            if ( id !== i ) return char;
            return { ...char, checked: event.target.checked};
        })
        this.setState({ newCharacterList: newState });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let selectedList = []
        this.state.newCharacterList.forEach((char) => {
            if (char.checked === true) return selectedList.push(char);
        })
        await this.props.dispatch(updateCharacterList(this.props.userApp.userData, selectedList));

        await this.props.dispatch(deleteNewCharacterList());

    }
    render() {
        return(
            <div>
                {this.props.userApp.newCharacterList === undefined && 
                <input type="button" onClick={this.handleNewUserButton} value="Setup New User!" disabled={this.state.newUserButtonDisabled} />}
                {this.props.userApp.newCharacterList !== undefined && 
                <div>
                    <p>Character List Loaded!<br />Select max level characters to track:</p>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.newCharacterList.map((object, i) => <CharacterList object={object} id={i} key={i} onChange={this.handleChange(i)} />)}
                        <input type="submit" value="Submit" />
                    </form>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {userApp} = state;
    return {
        userApp: userApp
    }
}

export default withRouter(connect(mapStateToProps)(NewUser));