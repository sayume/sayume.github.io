---
layout: post
title:  "Re-think about angular js"
date:   2015-04-11
categories: jekyll update
---
I write article complaining about angular recently, for the time past, I think it is the time to re-think about angular.

To build an angular app, you have to know its two ways binding concept. That means the model you bind to the view is more
meaningful to the view it bind to than the data it is going to render, that is opposite to the data-template-view model
we usually use. So the common way to show data in angular is something like the following:

{% highlight javascript %}
var list = getSomeList();

$scope.listToShow = [];
for(var i=0; i<list.length; i++){
  $scope.listToShow.push({
    p1: list[i].p1,
    p2: list[i].p2
  }
}
{% endhighlight %}

The model of angular must be bind first, even you have to set them empty. If you want to build the view after you fetch data
from the server the reasonable way is to create a directive, and if you want some custom element or defined some behave
of the element you have to use directive too, so figure out the directive before you want them rendered.

When binding an object to elements there can be problems, angular can't detect the changes of its inner children. To solve
this you have to attach a watch to the model to iterate the change detection to its children. To avoid this un-elegant
thing my suggest is not bind a too complicated model to an element, that means you should solve the complicated data structure
before you bind it to a view, like we did in the last code snippet, we redefined the "listToShow" instead of assign the
whole complicated "list" to the "$scope", once the data change you just re-inject the data from the "listToShow" to "list".
Trust me, you don't want to add many watches in your "$scope".

Another problem of angular happens when you fetch data async from server, you change some data from server but angular don't know
it, because you don't fire any dom event. To solve this you have to use "$apply()" function to force the change detection.
It will influence the performance of the site. And it sometimes buries deep in some angular UI component. You can use
dom manipulate technicals to solve them instead, although it conflicts with the angular concepts, so careful to treat these
problems.

All frameworks have its pros and cons, but you can well organise it to achieve what you want. When you know about angular,
it still can be a powerful weapon. In my case, I will still try angular and know more other tools as well, to do things
in my way, like reactjs.


