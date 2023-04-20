## Overview
This is my most recent and up to date personal website. 
It is built using: 
- Next.js 
- Typescript
- Sanity.io
- Upstash (For serverless redis)
- Tailwind
- Excalidraw (For my diagrams)

## Features I think are cool
I've always been a big fan of [Excalidraw](https://excalidraw.com/), so I spent quite a while reading the docs and figuring out how to integrate it into my website. ![image](https://user-images.githubusercontent.com/118649285/233498527-5e4d5d6b-ebe5-4c02-95f0-2df12d4064a7.png)
Heres how I did it:
I first created the .excalidraw files on their online editor, and would use the loadFromBlob function from their npm package @excalidraw/excalidraw. This would prove to be very inefficient, and increased my initial page load time to over 3 seconds. To solve this problem, I noticed that the loadFromBlob function returns an array of excalidraw elements that the Canvas takes as a prop to properly display the elements. So instead of computing that array everytime, I just stored the array in a seperate file and directly load the scene from there, bringing my initial page load time to sub 1 second.
---
Another issue was the long load times from my portfolio as I opted to load and store that data in Sanity's CMS. This was so I could easily update my projects from anywhere all the time without needing to recommit changes to my repository. Consequently, the load times for my portfolio data to arrive would be higher. While I am still searching for ways to circumvent this load time, a fix I incorporated to decrease the load times for consecutive visits was to cache all of the portfolio Data to Upstash's serverless redis database. enabling me to bring the load times to sub 1 second aswell.
