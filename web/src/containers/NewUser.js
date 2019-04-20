import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCharacterList, deleteNewCharacterList, fetchCharacters, update_new_user_stage, updateMain, fetchGuild } from '../redux/actions';
import CharacterList from '../presentational/CharacterList';

class NewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newCharacterList: [],
            newUserButtonDisabled: false,
            selectedOption: null,
            statusImportButton: "Start Import"
        }
    }

    handleNewUserButton = async () => {

        this.setState({ newUserButtonDisabled: true })
        await this.props.dispatch(fetchCharacters(this.props.userApp.accessToken))
        
        let newState = this.props.userApp.newCharacterList.map( (object) => { return Object.assign({}, object, { checked: false })})
        this.setState({ newCharacterList: newState })
        this.props.dispatch(update_new_user_stage(2))
    
    }

    handleChange = (i) => (event) => {
        const newState = this.state.newCharacterList.map((char, id) => {
            if ( id !== i ) return char;
            return { ...char, checked: event.target.checked};
        })
        this.setState({ newCharacterList: newState });
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        switch(this.props.userApp.newUserStage) {
            case 2:
                let selectedList = []
                this.state.newCharacterList.forEach((char) => {
                    if (char.checked === true) {
                        delete char.checked;
                        return selectedList.push(char);
                    }
                })
                await this.props.dispatch(updateCharacterList(this.props.userApp.characters, selectedList));

                await this.props.dispatch(deleteNewCharacterList());
                return this.props.dispatch(update_new_user_stage(3));
            case 3:
                let selectedOption = parseInt(this.state.selectedOption.slice(6));
                console.log(selectedOption);
                await this.props.dispatch(updateMain(this.props.userApp.characters, selectedOption));
                return this.props.dispatch(update_new_user_stage(4));
            default: 
                return;
        }
    }

    handleImportButton = async () => {
        // Pick out the character that we are going to work with and deactivate the import button
        // to prevent multiple calls.
        const mainChar = this.props.userApp.characters.find(char => char.main === true);
        this.setState({ statusImportButton: `Fetching guild data for ${mainChar.name}`});

        await this.props.dispatch(fetchGuild(mainChar, this.props.userApp.accessToken));


    }
    render() {
        return(
            <div>
                {this.props.userApp.newUserStage === 1 && 
                <input type="button" onClick={this.handleNewUserButton} value="Setup New User!" disabled={this.state.newUserButtonDisabled} />}
                {this.props.userApp.newUserStage === 2 && 
                <div>
                    <p>Character List Loaded!<br />Select max level characters to track:</p>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.newCharacterList.map((object, i) => <CharacterList object={object} id={i} key={i} onChange={this.handleChange(i)} type="checkbox" />)}
                        <input type="submit" value="Submit" />
                    </form>
                </div>}
                {this.props.userApp.newUserStage === 3 &&
                <div>
                    <p>STAGE 3 - Main Select!</p>
                    <form onSubmit={this.handleSubmit}>
                        {this.props.userApp.characters.map((object, i) => 
                            <CharacterList object={object} 
                                id={i} 
                                key={i} 
                                onChange={this.handleOptionChange} 
                                type="radio" 
                                value={"option" + i} 
                                checked={this.state.selectedOption === "option" + i}
                                />)}
                        <input type="submit" value="Save" />
                    </form>
                </div>}
                {this.props.userApp.newUserStage === 4 &&
                <div>
                    <p>Time to import all the things!</p>
                    {/* This will import guild data for the player's main character, check their guild rank to see if they are an officer rank or higher
                    and then import raider.io data and merge it with the existing character data.  Finally, it will save all this data to the database
                    to complete user registration....  
                    
                    That's a lot right?*/}
                    <input type="button" onClick={this.handleImportButton} value={this.state.statusImportButton} disabled={this.state.statusImportButton !== "Start Import"} />
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