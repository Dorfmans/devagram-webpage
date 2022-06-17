import HttpService from "./HttpService"

export default class FeedService extends HttpService {
    async loadPosts(idUser) {
        let url = '/feed';
        if (idUser) {
            url += `?id=${idUser}`;
        }

        return this.get(url);
    }

    async addComment(idPost, comment) {
        return this.put(`/comment?id=${idPost}`,{
            comment
        });
    }

    async addLikes(idPost) {
        return this.put(`/like?id=${idPost}`)
    }
}