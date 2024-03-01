const paths = {
  home() {
    return "/";
  },
  topicShow(topicSlug: string) {
    return `topic/${topicSlug}`;
  },
  postCreate(postSlug: string) {
    return `topic/${postSlug}/posts/new`;
  },
  postShow(postSlug: string, postId: string) {
    return `/topis/${postSlug}/posts/${postId}`;
  },
};

export default paths;
