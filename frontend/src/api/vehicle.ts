import api from '.'

export interface VehicleData {
  id: number
  stock_number: number
  brand: string
  model: string
  name: string
  year: string
  price: string
  mileage: number
  vehicle_type: string
  transmission: string
  fuel_type: string
  colour: string
  location: string
}

export async function getVehicles(): Promise<VehicleData[]> {
  const res = await api.get('/vehicles/')
  return res.data
}