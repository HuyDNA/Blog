<div style="text-align:justify">

# <span style="color:#339CFF"> Master Theorem</span>
Written on: 30/07/2022
<hr>

When I first heard this name one year ago while browsing some web pages on Computer Science, I was like "&#129300; Huhh wtf is that? Is it like the godfather of all theorems or does it hold the ultimate secret of the world of Computer Science? &#129316;". Then, I checked it out and far from what I had imagined that it was maths, like purely maths. Till now, I still don't know what the theorem's name has to do with its statement. According to [Wikipedia](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)), the name "master theorem" was popularized by the book [*Introduction to Algorithms*](https://en.wikipedia.org/wiki/Introduction_to_Algorithms), which is also the book I'm reading. My only best guess is maybe it's because of the fact that the master theorem is used to quickly solve divide-and-conquer recurrences. Master and divide & conquer, seems to have a connection here right???

Okay, let's dive in!!!

## <span style="color:#339CFF">Master theorem</span>

Given two integers $a,b \ge 1$ and the following recurrence: $f(x) = a f(x/b) + g(x)$. The asymtotic behavior of $f$ can be described as following:

* $f(x) = \Theta(n^{\lg_b a})$ if $g(x) = O(n^{\lg_ba - e})$,
* $f(x) = \Theta(n^{\lg_b a}\lg n)$ if $g(x) = \Theta(n^{\lg_ba})$,
* $f(x) = \Theta(g(x))$ if $g(x) = \Omega(n^{\lg_ba + e})$ and ..........

Note that because we're dealing with sequences here, the domain of $f$ is $\mathbb{N}$. Therefore $x/b$ is taken to be $\lfloor x/b\rfloor$ or $\lceil x/b \rceil$.

## <span style="color:#339CFF"> Proof </span>

</div>