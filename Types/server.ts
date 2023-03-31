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