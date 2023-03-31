export interface User {
	_id: string
	username: string
	email: string
	image: string
	resume: string
	password: string
	qualifications: any[]
	skills: any[]
	createdAt: string
	updatedAt: string
  }

export interface ChannelStore {
	channel: Channel | null;
	setChannel: (channel: Channel) => void;
  }
export interface ChannelsStore {
	channels: Channel[] | null;
	setChannels: (channels: Channel[]) => void;
  }
export interface ServersStore {
	servers: Server[] | null;
	setServers: (server: Server[]) => void;
	updateServers: () => void
  }
  export interface ServerStore {
	server: Server | null;
	setServer: (server: Server) => void;
  }
export interface PopupStore {
	isOpen: boolean;
	message: string;
	setIsOpen: (isOpen: boolean) => void;
	setMessage: (message: string) => void;
	clearMessage: () => void;
  }

  export interface ServerListStore {
	isListOpen: boolean;
	setListOpen: (isOpen: boolean) => void;
  }


  export interface UserStore {
	user: User | null;
	setUser: (user: User) => void;
  }
  
  
  

  export interface Channel {
	_id: string
	name: string
	parentServer: string
	parentSection: string
	type: string
	chatType: string
	createdAt: string
	updatedAt: string
	__v: number
  }
  export interface Server {
	_id: string
	servername: string
	channels: string[]
	adminstrators: string[]
	logo: string
	members: string[]
	pendingReq: string[]
	banned: string[]
	createdAt: string
	updatedAt: string
  }
  