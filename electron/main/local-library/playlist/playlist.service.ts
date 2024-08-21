import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Playlist } from './playlist.entity'

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist)
    private repo: Repository<Playlist>,
  ) {}


  async getAllPlaylist() {
    return await this.repo.find()
  }

  async getPlaylist(id: number) {
    return await this.repo.findOneBy({ id })
  }

  public async addPlaylist(playlist: Playlist) {
    await this.repo.save(playlist)
  }

  public async updatePlaylist(playlist: Playlist) {
    await this.repo.save(playlist)
  }

  public async renamePlaylist(id: number, newName: string) {
    await this.repo.update(id, { name: newName })
  }

  public async deletePlaylist(id: number) {
    try {
      const deleteResult = await this.repo
        .createQueryBuilder()
        .delete()
        .where('id = :id', { id })
        .execute()
      console.log(deleteResult)
    }
    catch (e) {
      console.error('Error during bulk deletion:', e)
    }
  }
}
