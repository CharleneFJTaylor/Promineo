class Song {
    constructor(title,artist) {
        this.title = title;
        this.artist = artist;
    }

    describe () {
        return `${this.title} sing by ${this.artist}.`;
    }
}

class Playlist {
    constructor(name) {
        this.name = name;
        this.songs = [];
    }

    addPlayer(song) {
        if (song instanceof Song) {
            this.songs.push(song);
        } else {
            throw new Error(`You can only add an instance of song. Argument is not a song: ${song}`);
        
        }
    }

    describe() {
        return `${this.name} has ${this.songs.lenght} songs.`;
    }
}

class Menu {
    constructor() {
        this.playlist = [];
        this.selectedPlaylist = null;
    }

    start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1' :
                    this.createPlaylist();
                    break;
                case '2' :
                    this.viewPlaylist();
                    break;
                case '3' :
                    this.deletePlaylist();
                    break;
                case '4' :
                    this.displayPlaylist();
                    break;
                default:
                    selection =0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
          0) exit
          1) create new playlist
          2) view playlist
          3) delete playlist
          4) display all playlists
        `);
    }

    showPlaylistMenuOptions(playlistInfo) {
        return prompt(`
            0) back
            1) add song
            2) delete player
            ----------------------
            ${playlistInfo}
        `)
    }

    displayPlaylist() {
        let playlistString = '';
        for (let i= 0; i <  this.playlist.length; i++) {
            playlistString += i + ') ' + this.playlist[i].name + '\n';
        }
        alert(playlistString);
    }

    createPlaylist() {
        let name = prompt('Enter name for new playlist');
        this.playlists.push(new Playlist(name));
    }

    viewPlaylist() {
        let index = prompt('Enter the index of the playlist you wish to view:');
        if (index> -1 && index < this.playlist.lenght) {
            this.selectedPlaylist = this.playlist[index];
            let description = 'Playlist Name: ' + this.selectedPlaylist.name + '\n';

            for (let i = 0; i < this.selectedPlaylist.songs.length; i++) {
                description += i +')' + this.selectedPlaylist.songs[i].title + ' - ' + this.selectedPlaylist.songs[i].artist + '\n';
            }
        
         let selection = this.showPlaylistMenuOptions(description);
         switch (selection) {
             case '1':
                 this.addSong();
                 break;        
            case '2':
                this.deleteSong();   
            }
        }
    }
    deletePlaylist() {
        let index = prompt('Enter the index of the playlist you wish to delete:');
        if (index > -1 && index < this.playlists.length) {
            this.playlists.splice(index, 1);
        }
    }
    addSong() {
        let title = prompt('Enter title for new song;');
        let artist = prompt('Enter artist for new song:');
        this.selectedPlaylist.songs.push(new Song(title, artist));
    }

    deleteSong() {
        let index = prompt('Enter the index of the song you wish to delete:');
        if (index > -1 && index < this.selectedPlaylist.songs.length) {
            this.selectedPlaylist.songs.splice(index, 1);
        }
    }  
}


let menu = new Menu();
menuy.start();