---
layout: post
title: "Programming a Serial Game"
description: ""
category:
tags: []
---
{% include JB/setup %}
Some authors of the murder mystery genre have said that the detective story is a game between writer and reader. Some would even compare it to a conversation. Well, I might be taking it a step further — Detective Butler 2 will literally make use of a conversation: a client-server connection! Today I will talk about the latest programming development, which affects how the game will be played, and I will also go over the story of how everything so far has been leading up to it.

When I switched to the Unity game engine, the first thing that came to mind was that I needed to make a scripting language. When you’re making a visual novel, screens are composed of text and commands. For every line of text, a series of commands may follow. I would need to create a language that, from within a text file, could be parsed by Unity. The objects in the scene would carry out the given commands, while reading and displaying the story’s text. And thus, KINscripter was born.

I could have just stopped there and called it a day, but I wanted to go beyond the level of a normal visual novel. With the power of Unity’s built-in Web Player, I could make Detective Butler into a web series. We could periodically release episodes (now renamed “chapters” to avoid confusion with Episode 1) to build a growing world of characters and of mystery. While I know of a few visual novels that have tried, I haven’t yet seen one that has succeeded.

Months after the initial concept, I began to encounter some trouble with the Web Player. Apparently, Chrome no longer supports it, and it might soon be the case for Firefox as well. WebGL had too many issues to even consider using, and the Web Player’s loading time was so incredibly slow that it would almost take more time to load the game than to play it!

The only fix I could think of was offering an optional downloadable executable. But that still posed a problem: imagine if we got to Chapter 100. That would be 100 download links, to 100 different files, all of which would be up to 100 MB in size. Who in their right mind would want to download all of that?! I know I would have to pass.

Then, with a bit of creative thinking (from my last blog post, “innovation through limitation”) I managed to come up with a solution. I recalled how manga chapters are actually quite short on their own, but are organized together within volumes. What if we offered a downloadable “volume” of Detective Butler, which would contain a number of short chapters? A rapidly growing, ever-changing number? And what if we only loaded the data from the chapter that was being read, to reduce loading time? Could such a thing be done?

Well, I discovered that it can. Using my knowledge of client-server programming, I came up with a model for generating and reading chapters, which you can see illustrated below (right click to enlarge):

To begin, the user downloads a single “client.exe”, which goes to a “chapter select” screen. From here, the game goes to my website and reads a file to generate buttons for each available chapter, along with a title, thumbnail, and description. So each time the user (you) start up DetectiveButler.exe, you will be able to see a list of available chapters, old and new!

After picking a chapter, the game goes back to my website to locate the relevant data. The data is organized per character (“Butler.unity3d”,”Gilligan.unity3d”, etc.) which gives us an additional level of malleability. Suppose we are currently writing Chapter 4, and want to update the sprites, fixing mistakes or adding new poses and expressions. Well, all we need to do is update the “Butler.unity3d” file, edit the script to include the new poses, and ta-dah! Chapters 1, 2, and 3 are all retroactively improved with new art! No matter how long ago you downloaded the client, you will see the new and improved version!

So, after loading all the relevant data, the client will load the relevant scene. This is where we finally get to look at our KINscripter text file and have the scene play it all out in motion. After the chapter ends, we release all of the data we had downloaded, return to the Chapter Select, and pick the next chapter to begin reading.

In summary, you will have two options: either view the game client embedded on this website, or download the client to your computer. Either way, you will have access to all future chapters through one single interface.

Because of the extremely flexible nature of this model, I think it should be said that the release of each chapter will be at a calm and gradual pace. There will not be a “single” release date for this game, aside from the release of the client. There will be many, many releases over the span of months and years. That is to say, when the next chapter is ready, it will be ready. I will take my time and release each chapter as they are finished.

My initial target date up until now had been “Summer 2015″ and I still think we can make that happen. Typically I have always tried to align my visual novel releases with Comiket (out of 07th Expansion’s tradition) and I see no reason why it can’t be done again (unforeseen delays notwithstanding). Once again though, I should reiterate that I plan to take the game in a very different direction (more suited for this programming model) so it would be best to look at Detective Butler 2 without the preconceived notions of what constitutes a visual novel.
