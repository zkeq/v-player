import { ipcRenderer } from 'electron'

export async function getLocalTrack(id: number) {
  try {
    const { data } = await ipcRenderer.invoke('track/get-track', id)
    return data
  }
  catch (e) {}
}

export async function getLocalAlbumTrack(albumKey: string) {
  try {
    const { data } = await ipcRenderer.invoke('track/get-tracks', albumKey)
    return data
  }
  catch (e) {}
}
