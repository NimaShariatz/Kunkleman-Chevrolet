import api from '.';




interface SignupData {
  username: string
  email: string
  password: string
  city: string
  province: string
  street_name: string
  postal_code: string
}

export async function sendSignupInfo(data: SignupData) {
  const res = await api.post('/signup/', data)
  return res.data
}






