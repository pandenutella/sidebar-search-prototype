import { Input } from "antd";

const SidebarSearch = ({ search, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value ?? null);
  };

  return (
    <div
      style={{
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Input
        value={search}
        onChange={handleChange}
        placeholder="Type anything to filter the menu"
        allowClear
      />
    </div>
  );
};

export default SidebarSearch;
