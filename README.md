`pm2 start "pnpm start" --name meet`

`watch -n 2 ./vp_stats.sh`

List active rooms	`lk room list`
See who is in a room	`lk room participants list <room-name>`
Generate a token manually	`lk token create --room <name> --identity <user>`
Delete a stuck room	`lk room delete <room-name>`

To see detailed stats (bitrate, packet loss, etc.) for a specific person:
`lk room participants get --room gk91-xe1d <PARTICIPANT_IDENTITY>`

Mute someone	`lk room participants update --mute --room gk91-xe1d <IDENTITY>`
Kick someone	`lk room participants remove --room gk91-xe1d <IDENTITY>`
Watch logs	`docker-compose logs -f livekit-server`

See logs
Just the last 100 lines	`docker-compose logs --tail 100`
Live stream new lines	`docker-compose logs -f`
Logs from last 10 mins	`docker-compose logs --since 10m`
Only the Meet client logs	`docker-compose logs meet-client`

`docker-compose logs livekit-server | grep -i "error"`
`docker-compose logs --since 5m livekit-server`
`docker-compose logs -f --tail 10 livekit-server`
`docker-compose logs --tail 50 livekit-server`

<a href="https://livekit.io/">
  <img src="./.github/assets/livekit-mark.png" alt="LiveKit logo" width="100" height="100">
</a>

# LiveKit Meet

<p>
  <a href="https://meet.livekit.io"><strong>Try the demo</strong></a>
  •
  <a href="https://github.com/livekit/components-js">LiveKit Components</a>
  •
  <a href="https://docs.livekit.io/">LiveKit Docs</a>
  •
  <a href="https://livekit.io/cloud">LiveKit Cloud</a>
  •
  <a href="https://blog.livekit.io/">Blog</a>
</p>

<br>

LiveKit Meet is an open source video conferencing app built on [LiveKit Components](https://github.com/livekit/components-js), [LiveKit Cloud](https://cloud.livekit.io/), and Next.js. It's been completely redesigned from the ground up using our new components library.

![LiveKit Meet screenshot](./.github/assets/livekit-meet.jpg)

## Tech Stack

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- App is built with [@livekit/components-react](https://github.com/livekit/components-js/) library.

## Demo

Give it a try at https://meet.livekit.io.

## Dev Setup

Steps to get a local dev setup up and running:

1. Run `pnpm install` to install all dependencies.
2. Copy `.env.example` in the project root and rename it to `.env.local`.
3. Update the missing environment variables in the newly created `.env.local` file.
4. Run `pnpm dev` to start the development server and visit [http://localhost:3000](http://localhost:3000) to see the result.
5. Start development 🎉
