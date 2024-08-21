import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { getPlayList } from '@/pages/local/api/playlist'

interface RootState {
  autoSync: boolean
  playlist: []
}
interface SettingAction {
  setAutoSync: (isAuto: boolean) => void
  setPlaylist: (playlist: []) => void
  refreshPlaylist: () => void
}
export const useLocalStore = create(persist<RootState & SettingAction>((set, get) => {
  return {
    autoSync: false,
    playlist: [],
    setAutoSync: autoSync => set({ autoSync }),
    setPlaylist: playlist => set({ playlist }),
    async refreshPlaylist() {
      const playlist = await getPlayList()
      console.log(playlist)
      set({ playlist })
    },
  }
}, {
  name: 'local',
  storage: createJSONStorage(() => localStorage),
}))
