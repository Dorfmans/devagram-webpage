import HttpService from "./HttpService"

export default class FeedService extends HttpService {
    async loadPosts(idUser) {
        let url = '/feed';
        if (idUser) {
            url += `?id=${idUser}`;
        }

        return this.get(url);
    }

    async addComment(idPost, comments) {
        return this.put(`/comments?id=${idPost}`,{
            comments
        });
    }

    async addLikes(idPost) {
        return this.put(`/likes?id=${idPost}`)
    }
}