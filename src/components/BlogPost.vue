<template>
    <div>
        <div v-for="post in posts" :key="post.id" class="blog-container">
            <div class="user-container">
                <img :src="post.avatarSrc" class="user-avatar" />
                <span>
                    <h5 class="user-name">{{ post.userName }}</h5>
                    <p class="posted-time">{{ post.postedTime }}</p>
                </span>
                <div class="edit-button">
                    <img src="@/assets/pen.png" />
                    <img src="@/assets/trash.png" />
                    <img src="@/assets/bookmarked.png" />
                </div>
            </div>

            <p class="post-caption">
                {{ post.caption }}
                <br />
                <a href="#">View more</a>
                <br />
                <a href="#">{{ post.hashtag }}</a>
            </p>

            <img :src="post.picture" class="main-picture" v-if="post.picture" />
            <div
                class="attachment-file"
                v-for="item in post.attachment"
                :key="item.id"
            >
                <div>
                    <img :src="item.iconSrc" class="attachment-icon" />
                    <p class="file-name">{{ item.name }}</p>
                </div>
                <div>
                    <p class="capacity">{{ item.capacity }}</p>
                    <img src="@/assets/download-icon.png" v-if="item.name" />
                </div>
            </div>

            <div class="engaging-section">
                <div>
                    <img src="@/assets/smile.png" />
                    <h5>{{ post.reationAmount }} reaction</h5>
                </div>
                <div>
                    <img src="@/assets/comment-alt.png" />
                    <h5>{{ post.commentAmount }} comment</h5>
                </div>
            </div>

            <CommentSection :post="post" />
        </div>
    </div>
</template>

<script>
import CommentSection from "./CommentSection.vue";
export default {
    props: {},
    components: { CommentSection },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    avatarSrc: require("@/assets/avatar1.png"),
                    userName: "Ralph Edwards",
                    postedTime: "15 minutes ago",
                    caption:
                        "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favourite?",
                    picture: require("@/assets/pic1.png"),
                    // attachment: {
                    //     iconSrc: "",
                    //     name: "",
                    //     capacity: "",
                    // },
                    reationAmount: 52,
                    commentAmount: 32,
                    isFolded: true,
                    comments: [
                        {
                            id: "comment1",
                            avatarSrc: require("@/assets/Divider.png"),
                            userName: "Bessie Cooper",
                            postedTime: "15 minutes ago",
                            content: "Soo great!!!",
                        },
                        {
                            id: "comment2",
                            avatarSrc: require("@/assets/comment/user2.png"),
                            userName: "Theresa Webb",
                            postedTime: "30 minutes ago",
                            content: "Still doing this man",
                        },
                        {
                            id: "comment3",
                            avatarSrc: require("@/assets/comment/user3.png"),
                            userName: "Brosanova",
                            postedTime: "40 minutes ago",
                            content: "Still doing this man",
                        },
                        {
                            id: "comment4",
                            avatarSrc: require("@/assets/comment/user4.png"),
                            userName: "Kathryn Murphy",
                            postedTime: "1 hour ago",
                            content: "Great choice of Acronym AF1’s ",
                        },
                    ],
                },
                {
                    id: 2,
                    avatarSrc: require("@/assets/avatar1.png"),
                    userName: "Ralph Edwards",
                    postedTime: "15 minutes ago",
                    caption:
                        "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favourite?",
                    picture: require("@/assets/pic2.png"),
                    // attachment: [
                    //     {
                    //         iconSrc: "",
                    //         name: "",
                    //         capacity: "",
                    //     },
                    // ],
                    reationAmount: 52,
                    commentAmount: 32,
                    comments: [],
                },
                {
                    id: 3,
                    avatarSrc: require("@/assets/avatar1.png"),
                    userName: "Ralph Edwards",
                    postedTime: "15 minutes ago",
                    caption:
                        "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favourite?",
                    picture: "",
                    attachment: [
                        {
                            iconSrc: require("@/assets/ppt.png"),
                            name: "Jerry-2020_I-9_Form.ppt",
                            capacity: "19KB",
                        },
                        {
                            iconSrc: require("@/assets/doc.png"),
                            name: "pdf-docusign.doc",
                            capacity: "18 MB",
                        },
                        {
                            iconSrc: require("@/assets/xls.png"),
                            name: "mine.xlsx",
                            capacity: "1 MB",
                        },
                        {
                            iconSrc: require("@/assets/doc.png"),
                            name: "sharefile.doc",
                            capacity: "25 MB",
                        },
                        {
                            iconSrc: require("@/assets/ppt.png"),
                            name: "formsi9.pdf",
                            capacity: "10 KB",
                        },
                    ],
                    hashtag: `#reels #instagramreels
#beautifuldestinations #earthfocus #earthbestshots #earthoffcial #earthpix #thegreatplanet #discoverearth #fantastic_earth #awesome_earthpix #roamtheplanet`,
                    reationAmount: 52,
                    commentAmount: 32,
                    isFolded: true,
                    comments: [
                        {
                            id: "comment1",
                            avatarSrc: require("@/assets/Divider.png"),
                            userName: "Bessie Cooper",
                            postedTime: "15 minutes ago",
                            content: "Soo great!!!",
                        },
                        {
                            id: "comment2",
                            avatarSrc: require("@/assets/comment/user2.png"),
                            userName: "Theresa Webb",
                            postedTime: "30 minutes ago",
                            content: "Still doing this man",
                        },
                        {
                            id: "comment3",
                            avatarSrc: require("@/assets/comment/user3.png"),
                            userName: "Brosanova",
                            postedTime: "40 minutes ago",
                            content: "Still doing this man",
                        },
                        {
                            id: "comment4",
                            avatarSrc: require("@/assets/comment/user4.png"),
                            userName: "Kathryn Murphy",
                            postedTime: "1 hour ago",
                            content: "Great choice of Acronym AF1’s ",
                        },
                    ],
                },
                {
                    id: 4,
                    avatarSrc: require("@/assets/avatar1.png"),
                    userName: "Ralph Edwards",
                    postedTime: "15 minutes ago",
                    caption:
                        "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favourite?",
                    picture: require("@/assets/pic4.png"),

                    reationAmount: 41,
                    commentAmount: 32,
                    isFolded: false,
                },
                {
                    id: 5,
                    avatarSrc: require("@/assets/avatar1.png"),
                    userName: "Ralph Edwards",
                    postedTime: "15 minutes ago",
                    caption:
                        "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favourite?",
                    picture: "",
                    reationAmount: 41,
                    commentAmount: 32,
                    isFolded: false,
                },
                {
                    id: 6,
                    avatarSrc: require("@/assets/avatar1.png"),
                    userName: "Ralph Edwards",
                    postedTime: "15 minutes ago",
                    caption:
                        "Search input is a must have of almost all apps. In this cheatsheet you can get inspiration on 6 variants of this component. Which one is your favourite?",
                    picture: require("@/assets/pic6.png"),

                    reationAmount: 41,
                    commentAmount: 32,
                    isFolded: true,
                    comments: [
                        {
                            id: "comment1",
                            avatarSrc: require("@/assets/Divider.png"),
                            userName: "Bessie Cooper",
                            postedTime: "15 minutes ago",
                            content: "Soo great!!!",
                        },
                        {
                            id: "comment2",
                            avatarSrc: require("@/assets/comment/user2.png"),
                            userName: "Theresa Webb",
                            postedTime: "30 minutes ago",
                            content: "Still doing this man",
                        },
                        {
                            id: "comment3",
                            avatarSrc: require("@/assets/comment/user3.png"),
                            userName: "Brosanova",
                            postedTime: "40 minutes ago",
                            content: "Still doing this man",
                        },
                        {
                            id: "comment4",
                            avatarSrc: require("@/assets/comment/user4.png"),
                            userName: "Kathryn Murphy",
                            postedTime: "1 hour ago",
                            content: "Great choice of Acronym AF1’s ",
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog-container {
    background: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 8px;
    position: relative;
    margin-bottom: 24px;
    .user-container {
        display: flex;
        height: 48px;
        margin: 16px;
        align-items: center;

        span {
            margin-left: 12px;
        }

        .user-avatar {
            border-radius: 50px;
        }
        .user-name {
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 24px;
        }
        .posted-time {
            font-weight: 400;
            font-size: 0.813rem;
            line-height: 20px;

            color: #767676;
        }
        .edit-button {
            position: absolute;
            right: 28px;
            img {
                margin-left: 24px;
                cursor: pointer;
            }
        }
    }
    .post-caption {
        margin: 16px;

        font-weight: 400;
        font-size: 0.875rem;
        line-height: 24px;

        a {
            text-decoration: none;
            color: #0e489b;

            font-weight: 500;
        }
    }
    .main-picture {
        width: calc(100% - 1px);
    }

    .engaging-section {
        display: flex;
        justify-content: space-around;

        border-bottom: 1px solid #e5e5e5;
        height: 56px;
        cursor: pointer;

        div {
            display: flex;
            align-items: center;
            gap: 18px;
        }
    }
    .attachment-file {
        display: flex;
        justify-content: space-between;
        margin: 0 28px 20px 20px;
        div {
            display: flex;
            align-items: center;
        }
        p {
            display: inline;
            margin: 0 29px 0 12px;
        }
        .file-name {
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 24px;
        }

        .capacity {
            font-weight: 400;
            font-size: 0.813rem;
            line-height: 20px;

            color: #767676;
        }
    }
}
</style>
