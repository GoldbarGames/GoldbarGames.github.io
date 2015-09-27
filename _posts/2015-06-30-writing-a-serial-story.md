---
layout: post
title: "Writing a Serial Story"
description: ""
category:
tags: []
---
{% include JB/setup %}


Working on Detective Butler 2 has been an interesting experience so far. Right now we are currently in beta testing mode for the first chapter. I’d like to go over a lot of things I’ve learned during the past eight months or so during the development process. And I’d also like to explain how Detective Butler 2′s story will be different from the previous installment.

For the first episode, we used ONScripter for our engine. Now we have switched to Unity, for two reasons: I felt limited by ONScripter’s programming capabilities, and so that we could create a browser-based web series. Because we’re not going with Ren’Py like most other visual novel developers, we have to face a lot of issues that other people don’t have to go through. I had to code the whole visual novel “engine” from scratch, essentially creating my own scripting language in the process. So while that means I had to program the basic functionality you’d find in Ren’Py right off the bat, it also meant I had to program new things that are not commonly seen in visual novels.

Special features include panning cameras, moving objects around in 3D space, rotating 3D objects, particle effects, processing each command between text, adjusting graphics settings and camera filters, optimizing 3D models to reduce lag, and a brand new Evidence system to replace the Journal. My intent is to create a highly immersive world by focusing on the “visual” more than the “novel”. All in all, it’s been a lot more complex to program, and as a result, I’ve been dedicating a lot more of my time to fixing technical issues rather than fixing literary ones.

The web player poses some unforeseen problems. Namely, aside from some minor bugs, Chrome doesn’t support it. WebGL is also pretty bad, with insanely slow loading times and messing up a lot of functionality. So I’ll probably just offer optional downloadable episodes as well. Consider it like downloading an episode of anime rather than being forced to watch it on a streaming site.

[3D rippling water and starry night sky, thanks Unity.]

For Detective Butler, no choices will impact the direction of the story — only the flow. That is, there will be points where you can have pseudo-choices that enhance your ability to solve the crime, without actually influencing what happens. This gameplay element bridges the gap between readers who want to solve the mystery and readers who simply want to watch Butler do it. Providing the optional element of crime scene investigation and interrogations allows for as much unique immersion within the game world as the player wants. It maximizes both player agency and the author’s control over the story. So in other words, it’s really like a mystery novel, where you solve the crime in your head as you go along — but with the aid of video game technology to let you use your little gray cells to the best of their ability.

The reason I have to maintain a linear story (no branching paths) is due to the serial nature. There would be no way to accommodate multiple endings for an ongoing story. So from the start, I have to assume there is a defined start point and a defined end point of each episode.

Now, what I want to mention here is that I think people (myself included) have high expectations for the new series. I’m trying to add a lot of new things and explore places that visual novels have not really gone before. That means there is a risk that it won’t be as good — sacrificing a bit of quality for something new. It’s easy to make something of quality when you do it a lot and have experience, and conversely it’s easy to make something bad when you’re new to it. But I don’t think that’s reason enough to not bother trying.

One thing on my mind has been timing for release schedules. How am I going to make sure I can write stories on a regular basis? I have a lot of other commitments and responsibilities (one of them actually being school) and so I can’t guarantee that whatever I produce within a month will actually be good. That leads me to another question, though, which is “how much should I try to produce within that timespan?”

[You can't tell here, but the camera is panning upward to reveal Butler's face.]

Let’s use serialized manga as an example. Manga chapters come out on a weekly basis. The author has about 20 pages to work with per chapter. So that means the mangaka (the author/artist) simply has to write and draw 20 pages every week. Once they run out of pages, they’re done. They end it on a cliffhanger or whatever and continue where it left off the week after. For an experienced artist, it’s probably not too difficult to get 20 pages done in a week (especially when being helped by several assistants). It’s easy enough to produce the story at a pace that the reader is comfortable reading at and a pace the writer is comfortable enough writing at. Finding that balance of pacing is integral to a serialized story.

Looking at an anime, it’s a little different. You have all the (20-minute, not 20-page) episodes pre-made, then simply aired in sequence once a week. That’s because production time takes a lot longer, so it would be impossible to make each episode the same week (unless you have a conveniently-simple art style like South Park). And for a live-action TV show like Breaking Bad, all of it is recorded months in advance and out of sequence (the actors did only receive their scripts for each episode as they got to filming them, to keep them in character for acting though). In other words, the writer has to plan out an entire season — they are given a quota of episodes to fill out, and they do so. Hence, you might get filler or bottle episodes.

In source material such as serialized manga, or the book version of a TV adaptation, there is no filler. That is because, by definition, it is source material, the core idea of the author. If you’re writing a “filler” scene, it’s not actually filler. That’s fluff, i.e., useless and unnecessary words, and that’s a detriment to your story. Filler does serve a purpose, but you can’t have filler in a story that is the source material. So when you read a manga, straight from the source, you’re reading it exactly as the author intended it. But you have to read it at the pace of 20 pages every week, which does have its own influence over what the author is writing.

For serialized stories, you have those 20 pages as a constraint to limit your creativity. But if you’re clever, you can use constraints to your advantage to innovate. That is what I like to call “innovation through limitation”. Early video game programmers had limited memory and processing power. Early techniques such as palette-swapping and mirroring pixels would effectively create new content without taking up any more technical constraints. Similarly, when you’re given a time limit (weekly serialization), or a space limit (number of pages) you have to put your creative mind to work in order to make a compelling experience within that limited scope.

[Characters have multiple cameras attached to them for utilizing different angles and close-ups.]

So, going back to visual novels. Visual novels do not have any of these constraints. ONScripter had technical limitations, but since I’ve moved to Unity I have gained a lot of freedom — freedom that I’m not necessarily the best at using. I have to impose some kind of creative limit on myself in order to innovate, but what kind? I can simulate the weekly or monthly serialization through browser-based web technology. But visual novels don’t have a page limit. Like books, each chapter can be of arbitrary length.

So, what is my standard of measurement?

Early on, I had decided on “time”. Reading speeds vary between readers, so I’d need this to be a range rather than a concrete limit. Make something that is between 30-60 minutes of gameplay and reading. So far, I managed to accomplish that. Beta tests have shown that I nailed that timeframe spot-on. No one has taken more than an hour to read it, and they have all taken more than half an hour. That amounts to about 7,000 words, which is equivalent of an episode of Breaking Bad.

Not a bad guess, eh?

Basically, each episode will be that length. 30-60 minutes of plot. It’s going to force me to make some creative decisions, which I cannot take back due to the nature of serialization. It’s almost like playing chess, but for writing a story. If I kill off a character too early, I can’t bring them back (well, I can, but retcons — taking back your moves — are signs of bad writing). A good serial writer needs to stick to their plan, even if they don’t have one. And that’s pretty scary, because it means there’s a chance to make mistakes. A lot of mistakes.

So in closing, I’ll only ask that you be open-minded about what I have in store for you. I’m taking the story in a very different direction, and so because I’m still not experienced with this new direction, Detective Butler might not be a perfect series. Especially not as perfect as I would like it to be. I’m not skilled enough for it yet, and I’ll readily admit that. But I consider myself (and my team) skilled enough to put on a really good show, and do something nobody else has done before — the serialization of visual novels.
