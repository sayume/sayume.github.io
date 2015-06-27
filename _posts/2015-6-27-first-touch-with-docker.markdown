---
layout: post
title:  "First Touch with Docker"
date:   2015-06-27
categories: jekyll update
---

This Tuesday I had deployed a project with many dependencies, it took me two hours to do the job, unfortunately I have to
scale it when the time needs. It is not a good an idea to repeat a two hours of work again and again, so I pick up docker
to solve the problem for me.

This is my first time to use docker in production, it took me almost a day to make it work. Finally I used it to have my
deploy environment prepared and learned several tips about how to have docker help you building the dev and prod environment.

1) Choose a suitable image, the are many official images on docker hub, you must to choose the one to fit your work, especially
you have many environment dependencies, you have to collect several environment together, a suitable image can save your
life.

2) build a test image at first, no one can write the Dockerfile right at just one time, you have to try at least several times,
a test images can help you debug your Dockerfile.

3) Official docker site can help your a lot, if you are not familiar with the docker command. The Dockerfile of the official
images can give you hint about how to write a Dockerfile.

4) Debug your Dockerfile with the test image, with command "/bin/bash" and docker entry point, you can get into the environment
and try commands you want to write, this is the basic step of debugging Dockerfile.

5) If you build a bad image, don't delete it in a hurry, because its fs layer can be used by other similar images, downloading
fs layer is a painful phase. If you just want to change the image a bit, you'd better keep it , the new image will share
most of its fs layer with the old one.

6) Named your docker images by version, so you can identify which is build first, and you can avoid being messed up by the
random image names.

Docker is very good to deal with complicated deploy environment, because you can just build the right image once and the
second time, you just type "docker run", then the world is getting to work.