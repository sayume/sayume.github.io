---
layout: post
title:  "Why react is good"
date:   2015-06-20
categories: jekyll update
---

I tried react.js recently, at the beginning, I was struggled with it, but with you getting more and more familiar with it,
you feel its power, it is a very well designed compared to angular(I've written two articles to complaint about it so I
won't repeat it here). As you can get all hands of information from the official site, so I will not tell the react thing,
just some personal feelings.

First, react is well followed the template-data-render pattern, you can just see the render function as a template. If
you used something like mustache before, you feel very comfortable about the react render function. And what you render
you control it with the data flow. And something like "ComponentDidMount", you must see it at some other place, yes, it is
like what we usually use in the backend "if(!isPostback())", with the life circle functions you can easily merged you data
flows in with the view render logic.

Although it is relative complicated in react to manage the data flow, but with the framework flux you can well managed
your data flow with the event system. If you well designed your data flow, it is very very easy to make changes, after
you set everything fine. When you have done the skeleton of your project, you just add events and functions and the changes
is made, you don't need to worry about the conflict of the view and data, because they are auto managed by the react-flux
framework.

And one more thing react is better than angular, it is you can fully manage the whole process, there is no black box, you
can debug your program step by step, and you have the whole control of the data flow. Angular truly sucks with the dynamic
view rendering.

There are other good details, like merged state of views and action store unbinding concepts.

React is very friendly with the third party tools as well, so you can just use it as a plugin or use it to construct your
whole project, light use or heavy use, that's depends on your convenient.

React also has its mobile version of react-native, I'll try it later. After two weeks of use, this is my conclusion,
react is good and angular sucks.