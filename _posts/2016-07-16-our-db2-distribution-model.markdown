---
layout: single
title: Our DB2 Distribution Model
modified:
categories: detective-butler
comments: true
share: true
excerpt: Learn about our game client for Detective Butler 2.
tags: []
image:
  feature:
date: 2016-07-16T11:51:35-05:00
---

Hello, world! It's time for our July update.

During June we sent out a prototype of Detective Butler 2 for testing. It has since gone through three rounds of revisions, and currently it's in pretty stable condition. We still have a few small bugs to iron out, but it's looking really good right now.

Upon the release of the game, players will have access to our free game client. This game client will be a small download that provides a user interface to download additional chapters of the story. Basically, you will require an Internet connection to read each chapter, as it will dynamically download that chapter for you to read, and will free all the associated memory as soon as you are done reading it. This makes it really convenient for both sides.

![title](/images/db-title2.gif)

After the story reaches a good stopping point, we'll bundle together all of the chapters released so far into a single executable and sell it on various indie distribution platforms. Since all of the data for the chapters will be hosted on our server anyway, we will just remove access to it once we begin creating each volume. Meaning that, if you begin reading from the very start, you'll have access to every chapter for free. But if you wait, then you'll have to buy the bundle of chapters (otherwise known as a volume) in order to read the story from the beginning.

This strategy is not too different from what most web comics already do.  Think of it like an early-access release. You get to read the chapters for free, and at an earlier time, but we may end up sacrificing a bit of quality in order to keep up with the release schedule. When we take the time to go back to bundle all the chapters together, we'll fix bugs, glitches, and typos as well as improving on existing content, such as finding better 3D models, textures, and sound effects.

As such, there are a number of fantastic features I would like to have in the final game, but are either too time consuming or potentially disastrous to implement at this point in time. Such features include a previously-mentioned dynamic difficulty system, quick-time events, and a robust stat/levelling system. We already have a very complex game, so adding more things could possibly backfire, both in terms of scope creep and pure quality. We do not want to spend time on extraneous featuers, especially if they are going to drag down the overall quality of the product. The entire point of releasing chapters periodically was to be more forgiving to ourselves about quality while maintaining a timely schedule to push content to our fans.

Keep in mind that the way our story is set up, you can pick up and start reading at any chapter -- each one is a self-contained mystery, although there is one over-arching story which connects all of them. In order to solve (and take part in) the larger mystery, you will want to read as many chapters as possible (providing incentive to go back and read the rest) but it is not strictly necessary in order to enjoy the game. Speaking of that, it will also not be necessary to have played the first game, Maiden Voyage Murder, but there will be a few Easter Eggs around for those who have.

But ultimately we are hoping to recreate the fun experience of Umineko, in which readers had to wait periodically for more answers about the mystery to be revealed. We think that combining the suspense of one mystery with the satisfaction of solving lots of smaller ones along the way should provide for a really fun experience. So not only is it about pushing out content in a timely manner, but in doing so we can actually create a unique and memorable experience in and of itself, which may provide more merit than the typical early-access appeal.

![city](/images/city4.jpg)

As a quick aside: we've also started working on a new engine for Witch Doctor Kaneko. We've decided that Unity is not the best approach for 2D platformer games, so we're going to be coding WDK in C++ using SFML. We may switch to SDL if necessary, but for now SFML does the job. So far within a single week we've implemented all of the spell animations, collision detection, and basic movement. It has actually been quite relaxing to switch gears and learn how to code a video game in C++, especially one of much smaller scale.

So, again, we're hoping our strategy will allow us to do a lot of things in a timely and efficient manner. Lastly, as we have a lot of features planned that we want to show off, we've started work on a gameplay trailer to do just that. I've gotten in contact with some really good voice actors over the past couple of weeks and we'll be looking forward to creating a fantastic video that will demonstrate many of the exciting features of Detective Butler's sequel!
