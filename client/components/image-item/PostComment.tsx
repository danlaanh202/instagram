import Avatar from "@mui/material/Avatar";
import { formatDistance, formatDistanceStrict } from "date-fns";
import styled from "styled-components";
import { IComment, IMedia, IUser } from "../../types";

const StyledPostComment = styled.div`
  padding-top: 12px;
  display: flex;
  gap: 8px;
  .modal-comment-container {
    flex: 1;
    display: flex;
  }
  .modal-like-container {
  }
`;
const StyledAvatar = styled(Avatar)`
  width: 32px !important;
  height: 32px !important;
  margin-right: 12px;
`;
const StyledCommentContentContainer = styled.div`
  .t-comment {
    &-username {
      color: #262626;
      font-weight: 600;
      margin-right: 8px;
    }
  }
  .b-comment {
    display: flex;
    margin-top: 8px;
    margin-bottom: 4px;
    font-size: 12px;
    color: #8e8e8e;
    line-height: 16px;
    &-date {
      margin-right: 12px;
    }
    &-nor-btn {
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
const PostComment = ({ comment }: { comment: IComment }) => {
  return (
    <StyledPostComment>
      <div className="modal-comment-container">
        <div className="avatar-container">
          <StyledAvatar
            src={((comment.user as IUser)?.avatar as IMedia)?.media_url}
          />
        </div>
        <StyledCommentContentContainer>
          <div className="t-comment">
            <span className="t-comment-username">
              {(comment.user as IUser)?.username}
            </span>
            {comment?.comment}
          </div>
          <div className="b-comment">
            <div className="b-comment-date">
              {formatDistanceStrict(
                new Date(comment?.created_at as string),
                Date.now(),
                { addSuffix: true }
              )}
            </div>
            <div className="b-comment-nor-btn">Reply</div>
          </div>
        </StyledCommentContentContainer>
      </div>
      <div className="modal-like-container">
        <LikeIcon />
      </div>
    </StyledPostComment>
  );
};
const LikeIcon = () => {
  return (
    <svg
      aria-label="Like"
      color="#262626"
      fill="#262626"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
    </svg>
  );
};
export default PostComment;
