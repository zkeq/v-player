import { ipcRenderer } from 'electron'

export function createPlaylist(name: string) {
  return ipcRenderer.invoke('playlist/add-playlist', name)
}

export function getPlayList() {
  return ipcRenderer.invoke('playlist/all-playlist')
}

export function addTrackToPlaylist(trackId: number, playlistId: number) {
  return ipcRenderer.invoke('playlist/add-track', trackId, playlistId)
}

export function removeTrackFromPlaylist(trackId: number, playlistId: number) {
  return ipcRenderer.invoke('playlist/remove-track', trackId, playlistId)
}
