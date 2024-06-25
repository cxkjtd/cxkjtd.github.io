var posts=["2024/03/19/hello-world/","2024/06/22/组织学与胚胎学/","2024/06/25/组织学与胚胎学名词解释/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };