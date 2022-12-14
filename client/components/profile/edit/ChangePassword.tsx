import Avatar from "@mui/material/Avatar";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IRootState } from "../../../redux/store";
import { IUser } from "../../../types";
import { m1000, md } from "../../../utils/responsive";
import MobileHeader from "../../header/MobileHeader";
const StyledEditProfile = styled.div`
  margin-top: 32px;

  ${md({
    marginTop: 0,
    marginBottom: "44px",
  })}
  .item-container {
    display: flex;
    margin-bottom: 16px;
  }
  .top {
    align-items: center;
    ${md({
      padding: "0 20px",
      marginTop: "20px",
    })}
    &-aside {
      margin: 0 !important;
    }
  }
`;
const StyledAvatar = styled(Avatar)`
  margin-left: auto;
  width: 38px !important;
  height: 38px !important
  ;
  ${md({
    marginRight: "20px",
  })}
`;
const AsideContainer = styled.div`
  flex: 0 0 194px;
  padding: 0 32px;
  text-align: right;
  ${md({
    padding: "0",
    textAlign: "left",
    flex: "unset",
  })}
  /* margin-top: 10px; */
  label {
    font-size: 16px;
    font-weight: 600;
    vertical-align: baseline;
    color: #262626;
  }
`;
const RightContainer = styled.div`
  flex-basis: 355px;
  /* padding-right: 60px; */
  ${m1000({
    paddingRight: "60px",
  })}
  ${md({
    flexBasis: "unset",
    padding: "0",
  })}
  .info-container {
    .username {
      font-size: 24px;
      line-height: 38px;
      margin-bottom: 2px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .item {
    width: 100%;
    input {
      width: 100%;
      background: rgb(250, 250, 250);
      border: 1px solid rgb(219, 219, 219);
      border-radius: 6px;
      color: #262626;
      line-height: 30px;
      padding: 4px 12px;
    }
  }
`;
const StyledForm = styled.div`
  ${md({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 20px",
  })}
  .item-container {
    ${md({
      flexDirection: "column",
    })}
  }
`;
const StyledSubmitButton = styled.button`
  color: white;
  margin-top: 16px;
  background: #0095f6;
  padding: 6px 10px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  :disabled {
    background: rgba(0, 149, 246, 0.3);
    cursor: not-allowed;
  }
`;
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const handleSetState = (
    setState: Dispatch<SetStateAction<string>>,
    str: string
  ) => {
    setState(str);
  };
  const user = useSelector((state: IRootState) => state.user.user as IUser);
  useEffect(() => {
    if (
      oldPassword &&
      newPassword &&
      confirmNewPassword &&
      confirmNewPassword === newPassword
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [oldPassword, newPassword, confirmNewPassword]);
  const handleChangePassword = async () => {
    console.log("changepassword to" + newPassword);

    //Call api to change password
  };
  return (
    <StyledEditProfile>
      <MobileHeader
        backRouter={`/${user.username}`}
        centerComp={<>Change Password</>}
      />
      <div className="item-container top">
        <AsideContainer className="top-aside">
          <StyledAvatar />
        </AsideContainer>
        <RightContainer>
          <div className="info-container">
            <div className="username">_dan2907_5ds</div>
          </div>
        </RightContainer>
      </div>
      <StyledForm>
        <div className="item-container">
          <AsideContainer>
            <label htmlFor="password">Old Password</label>
          </AsideContainer>
          <RightContainer>
            <div className="item">
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleSetState(setOldPassword, e.target.value)
                }
                type="password"
                name="password"
                id="password"
              />
            </div>
          </RightContainer>
        </div>
        <div className="item-container">
          <AsideContainer>
            <label htmlFor="new_password">New Password</label>
          </AsideContainer>
          <RightContainer>
            <div className="item">
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleSetState(setNewPassword, e.target.value)
                }
                type="password"
                name="new_password"
                id="new_password"
              />
            </div>
          </RightContainer>
        </div>
        <div className="item-container">
          <AsideContainer>
            <label htmlFor="confirm_password">Confirm new Password</label>
          </AsideContainer>
          <RightContainer>
            <div className="item">
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleSetState(setConfirmNewPassword, e.target.value)
                }
                type="password"
                name="confirm_password"
                id="confirm_password"
              />
            </div>
          </RightContainer>
        </div>
        <div className="item-container">
          <AsideContainer></AsideContainer>
          <RightContainer>
            <StyledSubmitButton
              disabled={isDisabled}
              className="submit-btn"
              onClick={handleChangePassword}
            >
              Change Password
            </StyledSubmitButton>
          </RightContainer>
        </div>
      </StyledForm>
    </StyledEditProfile>
  );
};

export default ChangePassword;
