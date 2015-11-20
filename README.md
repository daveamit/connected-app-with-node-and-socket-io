# Connected application with node.js and socket.io

## Aim of this project
HTTP being a stateless protocol, does not fulfil most of the real world problems
in an "as is" fashion as they require to persist some sort of state for
authentication or track call sequence to detect request forgery or to maintain
view state (as in asp.net). To address this particular problem various web frameworks
provide a feature called "sessions". Sessions are very import aspect of any web
app today, but there is an inherent a issue with this approach to maintain states;
its quite impossible to put the app behind a load balancer (usually geologically
distributed in nature) without introducing a little bit complicated architecture
to support such a scenario; such sophisticated architecture accompanies with quite
a lot of hardware requirements and hence a lot of moving parts making maintenance
a pain the [DONKEY]. With this project I'll attempt to introduce an approach using
socket.io to maintain states which would be faster, realtime and hopefully more
friendly. I do not claim to have invented any of these "idea" of using socket.io
to maintain states on this server, this is just my attempt to address this problem;
it involves a quite a bit of improvisation from the materials, sites, blogs and
endless videos I have referred.

This project is part of a blog at [Odd Code](https://oddcode.daveamit.com)
