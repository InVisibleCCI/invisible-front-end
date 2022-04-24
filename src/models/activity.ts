export interface Activity {
  uuid: string,
  name: string,
  description: string,
  duration: number
  // TODO: A remplacer par les interface et Merchant et Adress
  merchantUuid?: string,
  addressUuid?: string,
}