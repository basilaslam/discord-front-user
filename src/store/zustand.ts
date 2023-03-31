import {create} from 'zustand';
import {persist} from 'zustand/middleware'
import { Channel, ChannelStore, ChannelsStore, PopupStore, Server, ServerListStore, ServerStore, ServersStore, User, UserStore } from './types';
import axios from 'axios';



export const useChannelStore = create<ChannelStore>((set) => ({
  channel: null,
  setChannel: (channel : Channel) => set({ channel }),
}));
export const useChannelsStore = create<ChannelsStore>((set) => ({
  channels: null,
  setChannels: (channels : Channel[]) => set({ channels }),
}));
export const useServerssStore = create<ServersStore>((set) => ({
  servers: null,
  setServers: (servers: Server[]) => set({ servers }),
  updateServers: async () => {
    try {
      const response = await axios.get('/server/listServers')
      set({ servers: response.data });
    } catch (error) {
      console.error(error);
    }
  },

}));


export const useServerStore = create<ServerStore>((set) => ({
  server: null,
  setServer: (server : Server) => set({ server }),
}));


const userStoreCreator = persist<UserStore>(
  (set) => ({
    user: null,
    setUser: (user: User) => set(() => ({ user })),
    clearUser: () => set(() => ({ user: null })),
  }),
  { name: 'user-store' }
);

export const usePopupStore = create<PopupStore>((set) => ({
  isOpen: false,
  message:'',
  setIsOpen: (isOpen : boolean) => set({ isOpen }),
  setMessage: (message : string) => set({ message }),
  clearMessage: () => set({message: ''}),
}));

export const useServerListStore = create<ServerListStore>((set) => ({
  isListOpen: false,
  setListOpen: (isListOpen : boolean) => set({ isListOpen }),
}));


export const useUserStore = create(userStoreCreator);
