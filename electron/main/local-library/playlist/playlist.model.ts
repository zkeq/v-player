import { FileAccess } from '../utils/io/file-access'
import { Playlist } from './playlist.entity'

export class PlaylistModel {
  constructor(private playlistEntity: Playlist, private fileAccess: FileAccess) {}
  public get name(): string {
    return this.playlistEntity.name
  }

}
