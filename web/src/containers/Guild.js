/* TODO: Stashing code here for later
handleImportButton = async () => {
    // Pick out the character that we are going to work with and deactivate the import button
    // to prevent multiple calls.
    const mainChar = this.props.characters.characters.find(char => char.main === true);
    this.setState({ statusImportButton: `Fetching guild data for ${mainChar.name}`});

    await this.props.dispatch(fetchGuild(mainChar, this.props.user.accessToken));


}

                {this.props.user.newUserStage === 5 &&
                <div>
                    <p>Time to import all the things!</p>
                    {
                    //TODO: This will import guild data for the player's main character, check their guild rank to see if they are an officer rank or higher
                    and then import raider.io data and merge it with the existing character data.  Finally, it will save all this data to the database
                    to complete user registration....  
                    
                    That's a lot right?
                    
                    On second thought, I'm going to move this elsewhere. Considering the limited people that will go through this part,
                    it's probably better to break it out into its own section.
                    }
                    <input type="button" onClick={this.handleImportButton} value={this.state.statusImportButton} disabled={this.state.statusImportButton !== "Start Import"} />
                </div>}
*/