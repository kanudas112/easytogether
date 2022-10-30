import React from 'react'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import Background from "../about/about.jpg";
import './blog.css'

const SinglePost = () => {
  return (
    <>
    <Header/>
    
{/* single blog post starts */}

<main className="main">

<div className="site-breadcrumb" style={{ backgroundImage: `url(${Background})` }}>
<div className="container">
<h2 className="breadcrumb-title">Blog Single</h2>

</div>
</div>


<div className="blog-single-area pt-120 pb-120">
<div className="container">
<div className="row">
<div className="col-lg-8">
<div className="blog-single-wrapper">
<div className="blog-single-content">
<div className="blog-thumb-img">
<img src="assets/img/single.jpg" alt="thumb"/>
</div>
<div className="blog-info">
<div className="blog-meta">
<div className="blog-meta-left">
<ul>
<li><i className="far fa-user"></i><a href="#">Jean R Gunter</a></li>
<li><i className="far fa-comments"></i>3.2k Comments</li>
<li><i className="far fa-thumbs-up"></i>1.4k Like</li>
</ul>
</div>
<div className="blog-meta-right">
<a href="#" className="share-btn"><i className="far fa-share-alt"></i>Share</a>
</div>
</div>
<div className="blog-details">
<h3 className="blog-details-title mb-20">It is a long established fact that a reader</h3>
<p className="mb-10">
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
<p className="mb-10">
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
</p>
<blockquote className="blockqoute">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
<h6 className="blockqoute-author">Mark Crawford</h6>
</blockquote>
<p className="mb-20">
In a free hour when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection.
</p>
<div className="row">
<div className="col-md-6 mb-20">
<img src="assets/img/blog/01.jpg" alt=""/>
</div>
<div className="col-md-6 mb-20">
<img src="assets/img/blog/02.jpg" alt=""/>
</div>
</div>
<p className="mb-20">
Power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection.
</p>
<hr/>
<div className="blog-details-tags pb-20">
<h5>Tags : </h5>
<ul>
<li><a href="#">Behavior</a></li>
<li><a href="#">Depression</a></li>
<li><a href="#">Hypnosis</a></li>
</ul>
</div>
</div>
<div className="blog-author">
<div className="blog-author-img">
<img src="assets/img/blog/author.jpg" alt=""/>
</div>
<div className="author-info">
<h6>Author</h6>
<h3 className="author-name">Roger D Duque</h3>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout that it has a more less.</p>
<div className="author-social">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-instagram"></i></a>
<a href="#"><i className="fab fa-whatsapp"></i></a>
</div>
</div>
</div>
</div>
<div className="blog-comments">
<h4>Comments (20)</h4>
<div className="blog-comments-wrapper">
<div className="blog-comments-single">
<img src="assets/img/blog/com-1.jpg" alt="thumb"/>
<div className="blog-comments-content">
<h5>Jesse Sinkler</h5>
<span><i className="far fa-clock"></i> April 17, 2022</span>
<p>There are many variations of passages the majority have suffered in some injected humour or randomised words which don't look even slightly believable.</p>
<a href="#"><i className="far fa-reply"></i> Reply</a>
</div>
</div>
<div className="blog-comments-single blog-comments-reply">
<img src="assets/img/blog/com-2.jpg" alt="thumb"/>
<div className="blog-comments-content">
<h5>Daniel Wellman</h5>
<span><i className="far fa-clock"></i> April 17, 2022</span>
<p>There are many variations of passages the majority have suffered in some injected humour or randomised words which don't look even slightly believable.</p>
<a href="#"><i className="far fa-reply"></i> Reply</a>
</div>
</div>
<div className="blog-comments-single">
<img src="assets/img/blog/com-3.jpg" alt="thumb"/>
<div className="blog-comments-content">
<h5>Kenneth Evans</h5>
<span><i className="far fa-clock"></i> April 17, 2022</span>
<p>There are many variations of passages the majority have suffered in some injected humour or randomised words which don't look even slightly believable.</p>
<a href="#"><i className="far fa-reply"></i> Reply</a>
</div>
</div>
</div>
<div className="blog-comments-form">
<h4>Leave A Comment</h4>
<form action="#">
<div className="row">
<div className="col-md-6">
<div className="form-group">
<input type="text" className="form-control" placeholder="Your Name*"/>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<input type="email" className="form-control" placeholder="Your Email*"/>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<textarea className="form-control" rows="5" placeholder="Your Comment*"></textarea>
</div>
<button type="submit" className="theme-btn"><i className="far fa-paper-plane"></i> Post Comment</button>
</div>
</div>
 </form>
</div>
</div>
</div>
</div>
</div>
<div className="col-lg-4">
<aside className="sidebar">

<div className="widget search">
<h5 className="widget-title">Search</h5>
<form className="search-form">
<input type="text" className="form-control" placeholder="Search Here..."/>
<button type="submit"><i className="far fa-search"></i></button>
</form>
</div>

<div className="widget category">
<h5 className="widget-title">Category</h5>
<div className="category-list">
<a href="#"><i className="far fa-angle-double-right"></i>Bussiness<span>(10)</span></a>
<a href="#"><i className="far fa-angle-double-right"></i>Hypnotherapy<span>(15)</span></a>
<a href="#"><i className="far fa-angle-double-right"></i>Phobias &amp; Anxiety<span>(20)</span></a>
<a href="#"><i className="far fa-angle-double-right"></i>Stress Release<span>(25)</span></a>
<a href="#"><i className="far fa-angle-double-right"></i>Therapy<span>(30)</span></a>
</div>
</div>

<div className="widget recent-post">
<h5 className="widget-title">Recent Post</h5>
<div className="recent-post-single">
<div className="recent-post-img">
<img src="assets/img/blog/bs-1.jpg" alt="thumb"/>
</div>
<div className="recent-post-bio">
<h6><a href="#">It is a long established fact that a reader</a></h6>
<span><i className="far fa-clock"></i>17 April, 2022</span>
</div>
</div>
<div className="recent-post-single">
<div className="recent-post-img">
<img src="assets/img/blog/bs-2.jpg" alt="thumb"/>
</div>
<div className="recent-post-bio">
<h6><a href="#">It is a long established fact that a reader</a></h6>
<span><i className="far fa-clock"></i>17 April, 2022</span>
</div>
</div>
<div className="recent-post-single">
<div className="recent-post-img">
<img src="assets/img/blog/bs-3.jpg" alt="thumb"/>
</div>
<div className="recent-post-bio">
<h6><a href="#">It is a long established fact that a reader</a></h6>
<span><i className="far fa-clock"></i>17 April, 2022</span>
</div>
</div>
</div>

<div className="widget social-share">
<h5 className="widget-title">Follow Us</h5>
<div className="social-share-link">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-dribbble"></i></a>
<a href="#"><i className="fab fa-whatsapp"></i></a>
<a href="#"><i className="fab fa-youtube"></i></a>
</div>
</div>

<div className="widget sidebar-tag">
<h5 className="widget-title">Popular Tags</h5>
<div className="tag-list">
<a href="#">Behavior</a>
<a href="#">Depression</a>
<a href="#">Hypnosis</a>
<a href="#">Stress</a>
<a href="#">Therapy</a>
<a href="#">Psychoanalysis</a>
</div>
</div>
</aside>
</div>
</div>
</div>
</div>

</main>

{/* single blog post ends */}


    <Footer/>

    </>
  )
}

export default SinglePost