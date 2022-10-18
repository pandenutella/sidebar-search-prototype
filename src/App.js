import { Layout } from "antd";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SidebarSearch from "./components/SidebarSearch";
import groups from "./data/groups";
import items from "./data/items";

const App = () => {
  const [search, setSearch] = useState(null);

  const handleSearch = (search) => {
    setSearch(search);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Layout.Sider width={300} theme="light">
          <SidebarSearch search={search} onSearch={handleSearch} />
          <Sidebar
            groups={groups}
            items={items}
            search={search}
            onSearch={handleSearch}
          />
        </Layout.Sider>
        <Layout.Content></Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;
