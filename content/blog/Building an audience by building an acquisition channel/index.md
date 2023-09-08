---
title: Building an audience by building an acquisition channel?
date: "2021-01-11T23:46:37.121Z"
description: "Applying the principles of automation, leverage and cost-effectiveness in building an audience as a startup founder."
---

![Building an audience](./buildingaudience.png)
### 2023 update:

Originally I built the service in such a way that it was incurring quite a lot of server costs... So after about 2 years I pulled the plug, but if enough time/energy I might set it up again. <a href="https://62529d172b52b40008e7a6f0--pensive-curran-7efc9f.netlify.app/" target="_blank" rel="noopener noreferrer">You can check it out here</a>.


### Building an audience by building an acquisition channel?

Couple months ago I was listening to Courtland Allen and Rob Walling discuss the importance of having an audience as a SaaS-founder. Their discussion is part of a bigger debate on whether SaaS-founders should spend time on building an audience or not. The premise being, that if a SaaS-founder has a large following, it affects the probability of SaaS-success.

Reach, network, validation and trust: those are the things that an audience can provide.

### Going for the unconventional

So if an audience is a prerequisite for SaaS-success in 2021, how could you create an audience?

There are many ways to create an audience. But undoubtedly, not all are equally good. I think that there is a spectrum. On the one end, you have the approach of "doing cool shit and telling about it" (think of Elon Musk). And on the other end, you have the more conventional and intrusive [“mere-exposure effect”](https://en.wikipedia.org/wiki/Mere-exposure_effect) .

I get itchy even thinking about the conventional end of the spectrum. But I am not doing that cool stuff either (that I could build an audience based on it).

However, I can do stuff. So, I started thinking, could I apply the principles of automation, leverage and cost-effectiveness and build my way out of this dilemma?

As I was reflecting this, I got the idea of an unconventional approach: build an audience by building an acquisition channel: growthhackertools.io.

### The hypothesis: software has become content and needs curation

Whether it is a start-up or anything else, investing time or money into something is always a gamble. Because things do not always go as planned, no matter how hard you want something to happen.

Building own media is also a bet. It is a bet that what you are doing actually makes sense and creates value for other people.

My bet is that software has become content and needs curation mechanisms just like any other type of content.

And I do not mean software in the general sense. I mean that different categories of software have turned into their own content types.

Thus, it is not enough to have generic software aggregation sites anymore. There needs to be specialized software aggregation sites.

I know marketing, growth hacking and software. So, I am probably the right person to create a platform for curating growth hacking software content. Perhaps I could use it as a vehicle to create an audience for myself simultaneously.

My job is anyways to know all the latest tools and tactics so... maximum leverage, baby!

### "IT IS TIME TO BUILD"

It was time to start pushing buttons on my laptop.

I chose Gatsby.js as the technology to create the first version of growthhackertools.io. Mainly because I know React and had been playing around with Gatsby before. Gatsby is good for building static-, fast loading- and SEO-friendly sites. All good qualities for the site that I was visioning.

First, I built a rest API with Express/Mongoose/Mongodb but then changed my mind and did it by connecting Airtable to my Gatsby application's GraphQL. Express + GraphQL seemed just too damn tricky and there was a Gatsby plugin for Airtable. I had heard a lot of praise for Airtable and this was a good chance to get more familiar with it. In the beginning, I would only need to fetch data so this solution was good enough.

Everything worked pretty well.

"oh shit, now I have to make the site look good somehow"

My biggest hurdle was the CSS/design.

I am not a developer nor a designer. I am just mostly winging it, and I did it with the site design as well.

I looked some cool sites and drew a dark mode sketch in Photoshop.

Long story short, in about 2 weeks I had the minimum viable version of the service ready.

### Ship it or die

It was time for my site to leave the comforts of http://localhost:8000/ and face the world.

I published the site in the usual places and got pretty nice traction. Over half of the visitors on my site came from outside Finland. With US and India, being the 2nd and 3rd biggest sources for visitors.

"Ok, there is some interest."

"wait a second…I think…I HAVE ACHIEVED GLOBAL AUDIENCE for my site"

Pretty good start/validation, but I knew that now I have to start thinking how can I make this site as valuable as possible as effectively- and as sustainably as possible. It is the only way to make this "build an acquisition channel to build an audience"-approach to work.

I knew that this would be a long game, so I started preparing for it using automation.

### Automation, baby!

There are about a dozen places in the internet where developers publish their software. So actually it is not that hard to find "growth hacker tools". However, it takes time to go on these sites, everyday, and scroll down the published tool lists when there is so much software published every day.

So, I set up over a dozen Scrapy spiders to turn many lists into a one list.

Thus, I automated the scraping of these sites and created one, daily updating, database of these tools.

Now my job is just to look at one list of published tools and then test and decide what fits the purpose of my site.

### What's next?

Now, a month since the launch, I have still a lot of things to do and automate in the service and throughout the whole user journey.

But I feel pretty confident that I am onto something. It is hard to say, how effective this "acquisition channel" will turn out to be, but I feel like investing more time into this at the moment.

