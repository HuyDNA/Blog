<div style="text-align: justify">

# <span style="color:#339CFF"> Sylvester's criterion for positive-definite real matrices </span>
Written on: 20/7/2022
<hr>

Sometimes, I still have flashbacks of the time we have to learn Linear Algebra and Calculus at university. They are not necessarily hard but they really do give me kind of a struggle. The problem I have was the way they were taught, kinda like "Here we apply this.... and boom! Problem solved" with no further explanations as to why it works. It just works! This made me *SUPER* frustrated as I have always needed to know how something works before actually make it work.

As for Linear Algebra, this was a whole new area for me. At first, topics like Gaussian elimination, determinant, vector space or orthogonal matrix did not really give me a hard time. I did stumble here and there but overall I could prove most relevant mathematical results easily. However, the last few topics such as eigenvalues and quadratic forms were incredibly hard. The mathematical results were kinda unintuitive. At some time, I gave up and just learned the results by heart and how to apply it anyways. I did look up some of the proofs but apparently, this did not satisfy me.

For now is the summertime, I've decided to revisit some of the results to try to prove them. This is the first of them! And it's inspired by one proof I came across to a different theorem a long time ago. If my memory serves me right, I think that theorem was:

<div class="card card-body"> Proves that symmetric matrices are always orthogonally diagonalizable. </div>

<br>

The theorem I'm about to prove has to do with quadratic form of symmetric matrices. Let's dive in!!!


## <span style="color:#339CFF"> Notations </span>

* $M_n$ The set of all square matrices of size $n \times n$.
* $\Delta_i$ The upper left $i$-by-$i$ corner of a given matrix $\boldsymbol{A}$.
## <span style="color:#339CFF"> Prerequisite knowledge </span>


**Definition 1.** Given a symmetric matrix $\boldsymbol{A} \in M_n$. The quadratic form of $\boldsymbol{A}$ is $Q(\boldsymbol{x}) = \boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$, with $\boldsymbol{x} \in \mathbb{R}^n$.

**Definition 2.** Given a symmetric matrix $\boldsymbol{A} \in M_n$, then $\boldsymbol{A}$ is said to be *positive-definite* if and only if its quadratic form $Q(\boldsymbol{x}) > 0$ for all non-zero $\boldsymbol{x} \in \mathbb{R}^n$.

As you can see, the quadratic form of a symmetric matrix $\boldsymbol{A}$ is actually $Q(\boldsymbol{x}) = P(x_1, x_2, \cdots, x_n) = \displaystyle \sum_{1 \le i < j \le n} 2a_{ij}\times x_ix_j = \displaystyle \sum_{i = 1}^n a_{ii}\times x_i^2$. Therefore, a symmetric matrix is positive-definite if and only if $P(x_1, x_2, \cdots, x_n)$ for all real number $x_1, x_2, \cdots, x_n$.

**Theorem 1.** Given a matrix $\boldsymbol{A} \in M_n$. Then $\boldsymbol{A}$ is orthogonally diagnonalizable if and only if $\boldsymbol{A}$ is symmetric.

**Theorem 2.** A symmetric matrix $\boldsymbol{A} \in M_n$ if positive-definite if and only if all of its eigenvalues are positive.

You can see that **Theorem 1.** is actually a stronger result than the one I mentioned earlier. I will use these two theorems in my proof.
## <span style="color:#339CFF"> Sylvester's criterion</span>

Sylvester's criterion gives a necessary and sufficient criterion for a symmetric $\boldsymbol{A}$ to be positive-definite.

**Sylvester's criterion.** Given a symmetric $\boldsymbol{A} \in M_n$. Then $\boldsymbol{A}$ is positive-definite if and only if $|\Delta_i| > 0$ for all $i = \overline{1, n}$.

## <span style="color:#339CFF"> Proof</span>

* *Sylvester's criterion is sufficient for a symmetric $\boldsymbol{A}$ to be positive-definite*.

**Proof.** Prove by induction on the size of $\boldsymbol{A}$ (1).

*The base case.* It's trivial to prove the case where $\boldsymbol{A} \in M_1$.

*Induction step.* Assumes that statement (1) is already true where $\boldsymbol{A} \in M_n$.  
Now that $\boldsymbol{A} \in M_{n+1}$, $\boldsymbol{A}$ can be written as $\begin{pmatrix}\boldsymbol{A'} & \boldsymbol{u} \\\\ \boldsymbol{u}^T & x\end{pmatrix}$, where $\boldsymbol{A'} \in M_n$ is a symmetric matrix and $\boldsymbol{u} \in \mathbb{R}^n$.  
Then $\boldsymbol{A'}$ is positive-definite and according to **Theorem 1.** can be written as $\boldsymbol{A'} = \boldsymbol{P}\boldsymbol{D}\boldsymbol{P}^{T}$ where  $\boldsymbol{D}$ is a diagonal matrix. Moreover, all entries in $\boldsymbol{D}$ must be positive, as can be easily inferred from **Theorem 2.**  
Because $\boldsymbol{P}$ is nonsingular, there exists a vector $\boldsymbol{v} \in \mathbb{R}^n$ such that $ \boldsymbol{u} = \boldsymbol{P}\boldsymbol{v}$.  
Therefore, $\boldsymbol{A} = \begin{pmatrix}\boldsymbol{P}\boldsymbol{D}\boldsymbol{P}^T & \boldsymbol{P}\boldsymbol{v} \\\\ \boldsymbol{v}^T\boldsymbol{P^T} & x \end{pmatrix}= \begin{pmatrix}\boldsymbol{P} & 0 \\\\ 0 & 1 \end{pmatrix} \begin{pmatrix}\boldsymbol{D} & \boldsymbol{v} \\\\ \boldsymbol{v}^T & x\end{pmatrix} \begin{pmatrix}\boldsymbol{P}^T & 0 \\\\ 0 & 1\end{pmatrix} = \boldsymbol{Q}\begin{pmatrix}\boldsymbol{D} & \boldsymbol{v} \\\\ \boldsymbol{v}^T & x\end{pmatrix}\boldsymbol{Q}^T$  
where $\boldsymbol{Q} = \begin{pmatrix}\boldsymbol{P} & 0 \\\\ 0 & 1 \end{pmatrix}$.

From this we have, $|\Delta_{n+1}| = |\boldsymbol{A}| = |\boldsymbol{Q}|^2\begin{vmatrix}\boldsymbol{D} & \boldsymbol{v} \\\\ \boldsymbol{v}^T & x\end{vmatrix}$.  
And because $|\Delta_{n+1}|> 0$, $\begin{vmatrix}\boldsymbol{D} & \boldsymbol{v} \\\\ \boldsymbol{v}^T & x\end{vmatrix} > 0$.

We can set $\boldsymbol{B} = \begin{pmatrix} \boldsymbol{D} & \boldsymbol{v} \\\\ \boldsymbol{v}^T & x \end{pmatrix}$. Notice that $\boldsymbol{Q}$ is an orthogonal matrix as $\boldsymbol{Q}\boldsymbol{Q}^T = \boldsymbol{I}$. Then because $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{B}\boldsymbol{Q}^T = \boldsymbol{Q}\boldsymbol{B}\boldsymbol{Q}^{-1} $, $\boldsymbol{A}$ is *similar* to $\boldsymbol{B}$. As a result, $\boldsymbol{A}$ and $\boldsymbol{B}$ share the same eigenvalue set.

Therefore, it's sufficient to show that $\boldsymbol{B}$ is positive-definite. If $\boldsymbol{B}$ really is, all of $\boldsymbol{B}$'s eigenvalues - which is also $\boldsymbol{A}$'s - would be positive. Then, according to **Theorem 2.**, $\boldsymbol{A}$ is positive-definite.
</div>
