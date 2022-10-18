import { Layout } from "antd";

const App = () => {
  return (
    <Layout>
      <Layout.Header></Layout.Header>
      <Layout>
        <Layout.Sider></Layout.Sider>
        <Layout.Content></Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;
