import HttpService from "./HttpService"

export default class FeedService extends HttpService {
    async loadPosts(user) {
        let url = '/feed';
        if (user) {
            url += `?id=${user}`;
        }

        return this.get(url);
    }

    async addComment(postId, comment) {
        return this.put(`/comment?id=${postId}`,{
            comment
        });
    }

    async addLikes(postId, like) {
        return this.put(`/like?id=${postId}`)
    }
}