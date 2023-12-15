//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class PostList {
  constructor() {
    this.posts = [];
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(posttitle) {
    console.log(`You've shared post “${posttitle}” to your friend.`);
  }
}
class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [];
  }
  addComment(message) {
    this.comment.push(message);
  }
}
class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike(like) {
    this.like += like;
  }
}
class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
  }
}
class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}
class Notification {
  constructor(id) {
    this.id = id;
  }
  send(commentCreatedBy, posttitle) {
    console.log(
      `Notification: ${commentCreatedBy} has just commented on this post—"${posttitle}`
    );
  }
}
