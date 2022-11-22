import { GetServerSideProps } from "next";
import Head from "next/head";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import EditProfile from "../../components/profile/edit/EditProfile";
const StyledEditContainer = styled.div``;
const StyledContainer = styled.div`
  width: 100%;
  background: #fafafa;
  min-height: 100vh;
  padding: 30px 0;
`;
const StyledSettingsContainer = styled.div`
  width: 100%;
  max-width: 935px;
  display: flex;
  background: white;
  min-height: 50px;
  margin: auto;
`;
interface IList {
  index: number;
  title: String;
  component: ReactNode;
}
const StyledLeftContainer = styled.div`
  background: white;
  border-top: 1px solid #dbdbdb;
  .left-item {
    color: #262626;
    font-size: 16px;
    line-height: 24px;
    padding: 16px 16px 16px calc(32px - 2px);
    border-left: 1px solid #dbdbdb;
    width: 236px;
    cursor: pointer;
    :hover {
      background: #f9f9f9;
    }
  }
  .active {
    font-weight: 600;
    border-left: 2px solid;
  }
`;
const StyledRightContainer = styled.div`
  background: white;
  flex: 1;
  border: 1px solid #dbdbdb;
`;
const Edit = ({ list }: { list: IList[] }) => {
  const [activeId, setActiveId] = useState<number>(0);
  return (
    <StyledEditContainer>
      <Head>
        <title>{list[activeId].title} - Instagram</title>
      </Head>
      <Layout>
        <StyledContainer>
          <StyledSettingsContainer>
            <StyledLeftContainer>
              {list?.map((item, index) => (
                <div
                  key={item.title}
                  onClick={() => setActiveId(item.index)}
                  className={`left-item ${index === activeId ? "active" : ""}`}
                >
                  {item.title}
                </div>
              ))}
            </StyledLeftContainer>
            <StyledRightContainer>
              <EditProfile />
            </StyledRightContainer>
          </StyledSettingsContainer>
        </StyledContainer>
      </Layout>
    </StyledEditContainer>
  );
};

export const getServerSideProps: GetServerSideProps = () => {
  const data = [
    { index: 0, title: "Edit profile", component: <></> },
    { index: 1, title: "Change password", component: <></> },
    { index: 2, title: "Apps and websites", component: <></> },
    { index: 3, title: "Email notifications", component: <></> },
    { index: 4, title: "Push notifications", component: <></> },
    { index: 5, title: "Manage contacts", component: <></> },
    { index: 6, title: "Privacy and security", component: <></> },
    { index: 7, title: "Ads", component: <></> },
    { index: 8, title: "Supervision", component: <></> },
    { index: 9, title: "Login Activity", component: <></> },
    { index: 10, title: "Emails from Instagram", component: <></> },
    { index: 11, title: "Help", component: <></> },
    { index: 12, title: "Digital collectibles", component: <></> },
  ];
  return {
    props: {
      list: JSON.parse(JSON.stringify(data)),
    },
  };
};
export default Edit;
