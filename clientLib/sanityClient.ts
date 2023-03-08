import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'mmuaiie8',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-03-02'
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

const builder = imageUrlBuilder(client);

export const urlFor = (source:any)=> builder.image(source);

