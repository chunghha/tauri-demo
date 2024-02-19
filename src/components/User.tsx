import { invoke } from '@tauri-apps/api'
import type { Component } from 'solid-js'
import { setUser, user } from '../stores/user'

const User: Component = () => {
  const userPod: Promise<string> = invoke('get_user')
  userPod.then((v) => setUser(v))

  return <div class="font-bold mr-2 text-info">{user()}</div>
}

export default User
