import React, { Component } from 'react';

class CharacterList extends Component {

    render() {
        let avatarUrl = `http://render-us.worldofwarcraft.com/character/${this.props.object.thumbnail}`
        return(
            <p>
                <label>
                <img src={avatarUrl} alt="avatar!" /><br />
                Name: {this.props.object.name}<br />
                Server: {this.props.object.realm}<br />
                Level: {this.props.object.level}<br />
                Select: 
                <input type={this.props.type} 
                    id={this.props.id} 
                    name={this.props.id} 
                    onChange={this.props.onChange} 
                    value={this.props.value || undefined} 
                    checked={this.props.checked}/>
                </label>
            </p>
        );
    }
}

export default CharacterList;