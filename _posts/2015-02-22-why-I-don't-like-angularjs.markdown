---
layout: post
title:  "Why I don't like angular"
date:   2015-02-20 19:48:31
categories: jekyll update
---
Recently I got a chance to use angularjs in one of my project I worked on. I heard about angular for a period of time

with many praises and this is my first time to systematically to learn it and use it in my project, but it disappointed

me. So I searched on the internet to see what others said, and I found this article [2-years-with-angular]. Although the

experiences of angular are different, we share almost the same point of view.


Maybe I am still a newbie to angular, but I don't like it for the following reasons:

1) The pollution of name. Angular uses a definition called "two-way binding", that means a model automatically bunt to

 a element view. You have to name every model with a different name under the scope, because that name is occupied by

the model and the view, you can't reuse it, and you can't organized the name in the partial of the view as we usually do

in jquery, especially you have repeated same html element, you have to bind it with name with a prefix or suffix to

distinguish each other, like "$scope.location1", "$scope.location2". This is not a big problem, it is even not a problem

when the project is not large, but if a scope covers a lot of html elements, the name problem is troublesome.

2) The author of [2-years-with-angular] complained about the performance of angular. To me, it is not a big problem. But

the lack of lazy loading makes some work really hard. When you want to dynamically build the view according to the data

you fetch, this kind of work is not easy and it conflicts with the principal of angular, you can use directives to solve

this kind of problem but the solution if far from elegant.

3) The code structure of angular is bad also, sometimes you have to put too many lines in one js file. There is a way to

split them, but I don't want to split files only because of the length of the file, it makes the code hard to read, and

there are too many things under the scope namespace!

4) The "two-way binding" makes the process from model to view and view to model is not in your control, you lose many

magic compare to when you use pure jquery. And the auto binding process is not perfect in angular, sometimes you have to

hack the css to achieve what you want. In the period of my project, I've already learned many hacking techniques from

internet, and those things make the code even more unreadable.


With angular you find you can organize the whole project very fast at the beginning, however, with the time goes on, you

find it is very hard to add things and change things, the unreadable code and inner problem of angular eat your productivity.

So my conclusion is OK to fast build a demo and a tiny project with angular, if you want to build big, robust and logic

complicated project you'd better go back to js libraries, I think flexibility is very important when you are faced with

a product site.


[2-years-with-angular]:    http://www.fse.guru/2-years-with-angular